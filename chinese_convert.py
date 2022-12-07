#!/usr/bin/env python3
# coding=utf-8

'''
使用Open Chinese Convert 開放中文轉換库批量将简体中文转换为繁体中文
'''

import os
import opencc

'''
s2t.json Simplified Chinese to Traditional Chinese 簡體到繁體
t2s.json Traditional Chinese to Simplified Chinese 繁體到簡體
s2tw.json Simplified Chinese to Traditional Chinese (Taiwan Standard) 簡體到臺灣正體
tw2s.json Traditional Chinese (Taiwan Standard) to Simplified Chinese 臺灣正體到簡體
s2hk.json Simplified Chinese to Traditional Chinese (Hong Kong variant) 簡體到香港繁體
hk2s.json Traditional Chinese (Hong Kong variant) to Simplified Chinese 香港繁體到簡體
s2twp.json Simplified Chinese to Traditional Chinese (Taiwan Standard) with Taiwanese idiom 簡體到繁體（臺灣正體標準）並轉換爲臺灣常用詞彙
tw2sp.json Traditional Chinese (Taiwan Standard) to Simplified Chinese with Mainland Chinese idiom 繁體（臺灣正體標準）到簡體並轉換爲中國大陸常用詞彙
t2tw.json Traditional Chinese (OpenCC Standard) to Taiwan Standard 繁體（OpenCC 標準）到臺灣正體
hk2t.json Traditional Chinese (Hong Kong variant) to Traditional Chinese 香港繁體到繁體（OpenCC 標準）
t2hk.json Traditional Chinese (OpenCC Standard) to Hong Kong variant 繁體（OpenCC 標準）到香港繁體
t2jp.json Traditional Chinese Characters (Kyūjitai) to New Japanese Kanji (Shinjitai) 繁體（OpenCC 標準，舊字體）到日文新字體
jp2t.json New Japanese Kanji (Shinjitai) to Traditional Chinese Characters (Kyūjitai) 日文新字體到繁體（OpenCC 標準，舊字體）
tw2t.json Traditional Chinese (Taiwan standard) to Traditional Chinese 臺灣正體到繁體（OpenCC 標準）
'''
converter = opencc.OpenCC('s2twp.json')

if __name__ == "__main__":
    print("开始简繁转换")
    for root, dirs, files in os.walk('.'):
        for name in files:
            fullpath = os.path.join(root, name)
            if fullpath.endswith(".json"):
                json = ""
                with open(fullpath, 'r', encoding="UTF-8") as f:
                    json = f.read()
                result = converter.convert(json)
                with open(fullpath, 'w', encoding="UTF-8") as f:
                    f.write(result)
    print("已全部完成")
