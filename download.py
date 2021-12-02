#!/usr/bin/env python3
# coding=utf-8

# 从文本中批量下载文件并自动按顺序重命名存储到指定文件夹中
# 文本中每行代表一个要下载的文件
# 例如学小易
# 抓包可得到学小易教材答案每页图片的链接
# 例如https://p3.51xuexiaoyi.com/tos-cn-i-ituvz2clue/3b5d2acfebd54e07bab9657ad98742a2~tplv-ituvz2clue-{模板}.{格式}
# 其中模板可以是resize:0:0和water, 格式只测试出了webp, jpg和png三种
# 将抓到的链接存入文本文件中再执行此脚本批量下载, 最后再合并成pdf

import sys
import os
import time
import requests

download_path = './output' # 下载路径
interval = 100 # 下载间隔(毫秒)
number = 1 # 起始序号
extension = None # 文件扩展名, 如果为None则从url中获取

def download(url: str):
    global number
    time.sleep(interval / 1000)
    response = requests.get(url)
    ext = None
    if extension is None:
        index = url.rfind('.', url.rfind('/'))
        ext = url[index + 1:] if index > -1 else "bin"
    else:
        ext = extension
    with open('%s/%d.%s' % (download_path, number, ext), 'wb') as file:
        file.write(response.content)
    number += 1
    print("Downloading %s..." % url)

def main():
    print("Welcome to use Batch Downloader. Made by wc")
    if len(sys.argv) <= 1:
        print("Please specify the files to download")
        return
    if not os.path.exists(download_path):
        os.makedirs(download_path)
    list_path = sys.argv[1].strip()
    download_list = []
    with open(list_path, 'r') as inputfile:
        while True:
            line = inputfile.readline()
            if not line:
                break
            download_list.append(line.strip())
    print("Read %d line(s) from %s successfully" % (len(download_list), list_path))
    for url in download_list:
        download(url)
    print("All files has been downloaded")

if __name__ == '__main__':
    main()
