#!/usr/bin/env python3
# coding=utf-8

# https://www.wjx.cn/vm/eGV4Hw5.aspx

import sys
import time
import random
import asyncio
from pyppeteer import launch
from pyppeteer_stealth import stealth

template = {
    "wjx": {
        "tag": "for", # 选项的tag
        "submit": "#ctlNext", # 提交按钮
        "success": "#divdsc", # 成功提交文本
        "success_text": "答卷已经提交", # 成功提交的文本的一部分
        "restart": "" # 再答一次按钮
    },
    "wjw": {
        "tag": "for", # option-id
        "submit": "#next_button",
        "success": "#end_desc",
        "success_text": "已完成本次问卷",
        "restart": ".restart-survey"
    }
}
current = None

async def autoclick(page, element):
    button = await page.Jx("//*[@{}='{}']".format(current["tag"], element))
    await button[0].click()
    await asyncio.sleep(0.5)
    return

async def autoradio(page, elements):
    element = random.choice(elements)
    await autoclick(page, element)
    return

async def autocheck(page, elements, mustcheck = False):
    checked = 0
    for element in elements:
        chance = random.random()
        if chance > 0.6:
            await autoclick(page, element)
            checked += 1
    if checked == 0 and mustcheck:
        await autocheck(page, elements, mustcheck)
    return

async def autoinput(page, element, texts):
    text = random.choice(texts)
    await page.type("#{}".format(element), text)
    await asyncio.sleep(0.5)
    return

async def answer(url, times):
    global current
    if "wjx" in url:
        current = template["wjx"]
    elif "wenjuan" in url:
        current = template["wjw"]
    else:
        print("未知问卷网站, 请手动适配")
        return False
    browser = await launch(headless=False, args=["--window-size=1024,768"]) # "--no-sandbox"
    success = True
    for i in range(times):
        try:
            page = await browser.newPage()
            await page.setViewport({'width': 1024, 'height': 768})
            await stealth(page)
            # await page.evaluateOnNewDocument("() =>{Object.defineProperties(navigator, {webdriver:{ get: () => false }})}")
            await page.goto(url)
            print("第 {} 次运行: {}".format(i + 1, await page.title()))
            await page.waitForSelector(current["submit"]);
            # ========== TODO 在此处写答问卷的代码 ==========
            # 问卷星测试用问卷
            # await autoradio(page, ["q1_1", "q1_2"])
            # await autocheck(page, ["q2_1", "q2_2", "q2_3"], True)
            # 问卷网测试用问卷
            await autoradio(page, ["option_62712d6cfb07238c0c603a75", "option_62712d6cfb07238c0c603a76"])
            await autocheck(page, ["option_62712d6f5d2f824735be2cc6", "option_62712d6f5d2f824735be2cc7", "option_62712d7ebac485964a69917f"], True)
            # ===============================================
            await asyncio.sleep(3)
            await page.click(current["submit"])
            await asyncio.sleep(2)
            await page.waitForSelector(current["success"]);
            text = await page.Jeval(current["success"], "node => node.innerText")
            if not current["success_text"] in text:
                success = False
                break
            # await page.waitForSelector(current["restart"]);
            # page.click(current["restart"])
        except Exception as e:
            success = False
            print(e)
            break
        finally:
            await page.close()
            # FIXME 清空缓存, 不行就重开浏览器吧
    await browser.close()
    return success

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    print("欢迎使用问卷星/问卷网问卷自动填写系统")
    # 问卷星测试用问卷(请使用手机版问卷链接)
    # url = "https://www.wjx.cn/vm/OsA1Tc5.aspx"
    # 问卷网测试用问卷
    url = "https://www.wenjuan.com/s/UZBZJvzhYGb"
    # url = "TODO 要填写的问卷链接"
    print("当前要填写的问卷为: {}".format(url))
    times = int(input("请输入运行次数: "))
    success = loop.run_until_complete(answer(url, times))
    if success:
        print("已成功填写 {} 份问卷, 按回车键退出程序...".format(times))
    else:
        print("问卷填写失败, 按回车键退出程序...")
    print("如果按回车退不出去... 那就按 Ctrl + C 退出吧")
    input()
    