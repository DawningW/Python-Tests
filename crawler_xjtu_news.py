#!/usr/bin/env python3
# coding=utf-8

import time
from urllib import parse
import requests
from bs4 import BeautifulSoup

def set_encoding(r, *args, **kwargs):
    r.encoding = "utf-8"

session = requests.Session()
session.hooks = {"response": set_encoding}
home_url = "http://news.xjtu.edu.cn/zyxw.htm"
max_item = 100
output = "news.txt"

if __name__ == "__main__":
    with open(output, "w", encoding="utf-8") as f:
        item_count = 0
        url = home_url
        while item_count < max_item:
            print(f"开始爬取{url}中的所有新闻")
            html = session.get(url=url).text
            soup = BeautifulSoup(html, features="html.parser")
            links = [parse.urljoin(url, item.find("a", class_="bt").get("href"))
                     for item in soup.find("ul", class_="listq1-1").children if item != "\n"]
            time.sleep(1)
            for link in links:
                try:
                    print(f"开始爬取第{item_count + 1}篇新闻: {link}")
                    html2 = session.get(url=link).text
                    soup2 = BeautifulSoup(html2, features="html.parser")
                    title = soup2.find("h1", class_="ssd").text.strip()
                    content = soup2.find("div", class_="v_news_content").text.strip()
                    f.write(f"{title}\n{content}\n\n")
                    item_count += 1
                except:
                    print(f"爬取{link}失败...")
                time.sleep(0.2)
            url = parse.urljoin(url, soup.find("span", class_="p_next").a.get("href"))
