# coding=utf-8

import time
import math
import random
import re
import optparse
import requests

session = requests.session()

def login_eda(username, password):
    url = r"http://172.20.20.1:801/srun_portal_pc.php?ac_id=3"
    fields = {
        "action": "login",
        "ac_id": 3,
        "user_ip": "",
        "nas_ip": "",
        "user_mac": "",
        "url": "",
        "username": username,
        "password": password,
        "save_me": 1
        }
    reponse = session.post(url, fields)
    # print(s.cookies.get_dict())
    error = re.search(r"E\d+: .*\.", reponse.text, re.M)
    if error is None:
        result = re.search(r"get_online_info\('(.*)'\)", reponse.text, re.M)
        if result.group(1) is not None:
            return {"username": username, "ip": result.group(1)}
    else:
        print("登录失败, 原因: " + error.group())
    return None

def info_eda():
    url = r"http://172.20.20.1:801/include/auth_action.php?k="
    # http://172.20.20.1:801/js/srun_portal.js#78
    # var k = Math.floor(Math.random() * (100000 + 1));
    # 所以说这个随机数有啥用???人类迷惑行为
    k = random.randint(1, 100000)
    url += str(k)
    fields = {
        "action": "get_online_info",
        "key": k
        }
    reponse = session.post(url, fields)
    if reponse.text != "not_online":
        result = reponse.text.split(',')
        usage = "{:.2f} MB".format(int(result[0]) / 1000 / 1000)
        sec = int(result[1])
        hour = math.floor(sec / 3600)
        sec %= 3600
        min = math.floor(sec / 60)
        sec %= 60;
        stime = "{}:{}:{}".format(hour, min, sec)
        money = "￥" + result[2]
        ip = result[5]
        return {"time": stime, "usage": usage, "money": money, "ip": ip}
    return None

if __name__ == "__main__":
    parser = optparse.OptionParser("%prog [-t[ype] <type>] username password")
    parser.add_option("--type", "-t", dest = "type", default="1", help="choose the net which you want to connect to")
    parser.add_option("--silent", "-s", dest = "silent", default=False, help="will print nothing if had no error")
    options, args = parser.parse_args()
    if len(args) >= 2:
        try:
            if options.type == "0":
                print("凌水主校区请使用该项目: https://github.com/kevin-y-ma/login-DLUT-LingShui")
            elif options.type == "1":
                print("正在检测是否已经登录校园网, 请稍候")
                result = info_eda()
                if result is None:
                    print("正在自动登录校园网, 请稍候")
                    result = login_eda(args[0], args[1])
                    if result is not None:
                        time.sleep(2)
                        print("用户{}已成功登录!".format(result["username"]))
                        print("已用时长: {time}\n已用流量: {usage}\n账户余额: {money}\nIP地址: {ip}".format_map(info_eda()))
                else:
                    print("您已登录校园网, 无需重复登录")
                    print("已用时长: {time}\n已用流量: {usage}\n账户余额: {money}\nIP地址: {ip}".format_map(result))
            elif options.type == "2":
                print("很抱歉, 我没去过盘锦校区")
            else:
                print("无效的校园网种类, 请在0/1/2中选择")
        except Exception as e:
            print("登录过程中发生异常, 详细信息: {}".format(e))
    else:
        parser.print_usage()
    session.close()
