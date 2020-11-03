# coding=utf-8

import time
import random
import sys
from msvcrt import getch
from selenium import webdriver
from selenium.common.exceptions import UnexpectedAlertPresentException

tag = "option-id"

def autoclick(element):
    browser.find_element_by_xpath("//*[@{}='{}']".format(tag, element)).click()
    return

def autoradio(elements):
    element = random.choice(elements)
    autoclick(element)
    return

def autocheck(elements, mustcheck = False):
    checked = 0
    for element in elements:
        chance = random.random()
        if chance > 0.6:
            autoclick(element)
            checked = checked + 1
    if checked == 0 and mustcheck:
        autocheck(elements, mustcheck)
    return

# driver_url = r"E:\Program Files (x86)\DevelopTools\Web\WebDrivers\msedgedriver.exe"
driver_url = r".\msedgedriver.exe"
url = "https://www.wenjuan.com/s/26F3Mbz/"
print("欢迎使用鹏哥专属的用于问卷网的自动问卷填写系统")
print("当前要填写的问卷为: {}".format(url))
times = int(input("请输入运行次数: "))
for i in range(times):
    try:
        #option = webdriver.ChromeOptions()
        #option.binary_location = r'C:\Program Files (x86)\SogouExplorer\SogouExplorer.exe'
        browser = webdriver.Edge(executable_path = driver_url)
        #browser = webdriver.Chrome(executable_path = driver_url, options=option)
        browser.get(url)
        print("第 {} 次运行: {}".format(i + 1, browser.title))
        time.sleep(1)
        autoradio(['5f9cdb6a92beb559da9b6287', '5f9cdb6a92beb559da9b6288'])
        # autoradio(['5f9cdc5d92beb510bc1a298a', '5f9cdc5d92beb510bc1a298b', '5f9cdc5d92beb510bc1a298c', '5f9cdc5d92beb510bc1a298d', '5f9ce00092beb511aa591462'])
        autoradio(['5f9cdc5d92beb510bc1a298a', '5f9cdc5d92beb510bc1a298b','5f9cdc5d92beb510bc1a298a', '5f9cdc5d92beb510bc1a298b','5f9cdc5d92beb510bc1a298a', '5f9cdc5d92beb510bc1a298b','5f9cdc5d92beb510bc1a298a', '5f9cdc5d92beb510bc1a298b', '5f9cdc5d92beb510bc1a298c', '5f9cdc5d92beb510bc1a298d', '5f9ce00092beb511aa591462'])
        autoradio(['5f9cdcad92beb50eec62f66a', '5f9cdcad92beb50eec62f66b'])
        autocheck(['5f9cdcf692beb5125b99f1d1', '5f9cdcf692beb5125b99f1d2', '5f9cdcf692beb5125b99f1d3', '5f9cdcf692beb5125b99f1d4'], True)
        autocheck(['5f9cde0392beb5125b99f1f7', '5f9cde0392beb5125b99f1f8', '5f9cde0392beb5125b99f1f9', '5f9cde0392beb5125b99f1fa'], True)
        autocheck(['5f9cded392beb50e1ad84561', '5f9cded392beb50e1ad84562', '5f9cded392beb50e1ad84563', '5f9cded392beb50e1ad84564'], True)
        autoradio(['5f9cdf1992beb512d4f7d254', '5f9cdf1992beb512d4f7d255'])
        autoradio(['5f9cdf7892beb5105a3de23f', '5f9cdf7892beb5105a3de240'])
        autoradio(['5f9cdfda92beb51222601c49', '5f9cdfda92beb51222601c4a', '5f9cdfda92beb51222601c4b'])
        autocheck(['5f9cdb6b92beb559da9b62b5', '5f9cdb6b92beb559da9b62b6', '5f9cdb6b92beb559da9b62b7', '5f9cdb6b92beb559da9b62b8', '5f9cdb6b92beb559da9b62b9'], True)
        browser.find_element_by_id("next_button").click()
        while True:
            try:
                time.sleep(0.2)
                str = browser.find_element_by_id("end_desc").text
                if "已完成本次问卷" in str: break
            except:
                pass
        # browser.refresh()
        # time.sleep(1)
        # browser.find_element_by_class_name("restart-survey").click()
        browser.close()
    except UnexpectedAlertPresentException:
        # browser.switch_to.alert.accept()
        browser.delete_all_cookies()
        time.sleep(3)
        continue

browser.quit()
print("已成功填写 {} 份表单, 按任意键退出程序...".format(times))
print("如果按按键退不出去... 那就按 Ctrl + C 退出吧")
getch()
