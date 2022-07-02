#!/usr/bin/env python3
# coding=utf-8

'''
使用requests和beautifulsoup4库爬取西安市二手房交易服务平台的二手房数据
'''

import time
import re
import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37"
}
session = requests.Session()
url = "https://zjj.xa.gov.cn/esfgp/{}"
max_page = 389
output = "xaesfgp.csv"

CN_NUM = {
    "零": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9, "两": 2, "俩": 2
}
def cn2num(s):
    if len(s) == 0 or s.isdecimal():
        return s
    num_str = ""
    for c in s:
        num_str += str(CN_NUM[c])
    return num_str

if __name__ == "__main__":
    print("爬取西安市二手房交易服务平台数据")
    with open(output, "w", encoding="utf-8") as f:
        f.write("小区区位,面积,卧室数,厅数,楼层,朝向,建筑年代,装修,房价,发布时间\n")
        size = 0
        for i in range(1, max_page + 1):
            print(f"开始爬取第{i}页")
            html = session.get(url=url.format(f"index.aspx?page={i}"), headers=headers).text
            soup = BeautifulSoup(html, features="html.parser")
            linklist = [item.a.get("href") for item in soup.find_all("div", class_="esf_code_sz")]
            time.sleep(1)
            for link in linklist:
                success = False
                while not success:
                    try:
                        html = session.get(url=url.format(link), headers=headers).text
                        soup = BeautifulSoup(html, features="html.parser")
                        result = []
                        result.append(soup.find(id="lbl_xq").text.strip())
                        result.append(soup.find(id="lbl_jzmj").text.strip())
                        layout = soup.find(id="lbl_hx").text.strip().replace("+", "-")
                        layouts = []
                        if layout.isdecimal():
                            layouts.append(layout)
                        elif "-" in layout:
                            layouts = layout.split("-")
                        elif "/" in layout:
                            layouts = layout.split("/")
                        elif "." in layout:
                            layouts = layout.split(".")
                        elif "居" in layout: # "居"和底下的"室", "厅"不能互换, 考虑到"三居室"这样的组合
                            ju = re.search(r"(.)居", layout)
                            layouts.append(cn2num(ju.group(1)))
                            layouts.append("未知")
                        elif "室" in layout or "厅" in layout:
                            shi = re.search(r"(.)室", layout)
                            layouts.append(cn2num(shi.group(1)) if shi is not None else "0")
                            ting = re.search(r"(.)厅", layout)
                            layouts.append(cn2num(ting.group(1)) if ting is not None else "0")
                        else:
                            layouts.append(layout)
                            print(f"{link}具有无法解析的户型: {layout}")
                        result.append(layouts[0])
                        result.append(layouts[1] if len(layouts) > 1 else "0")
                        szc = soup.find(id="lbl_szc").text.strip()
                        zcs = soup.find(id="lbl_zcs").text.strip()
                        result.append(f"{szc}/{zcs}层")
                        result.append(soup.find(id="lbl_cx").text.strip()
                                      .replace(" ", "").replace("/", "").replace(",", "").replace("，", "").replace("朝", "").replace("通透", ""))
                        result.append(soup.find(id="lbl_jznf").text.strip())
                        result.append(soup.find(id="lbl_zxqk").text.strip()
                                      .replace("单", "").replace("修", "").replace("空房", "").replace("全配", ""))
                        price = soup.find("font", class_="size20 yahei color_esf")
                        per_price = re.search(r"(\d+)", price.next_sibling.text.strip()).group(1)
                        result.append(f"{per_price}/㎡")
                        result.append(soup.find(id="lbl_fbsj").text.strip())
                        f.write(",".join(result) + "\n")
                        size += 1
                        success = True
                    except:
                        print(f"爬取{url.format(link)}失败, 等待10秒后重试")
                        session = requests.Session()
                        time.sleep(10)
            f.flush()
        print(f"爬取完毕, 共爬取{size}条数据")
    print(f"数据已保存到{output}文件中")
