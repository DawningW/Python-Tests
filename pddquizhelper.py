#coding=utf-8
import sys
import string
import re
import json
from urllib.parse import quote
import requests
from mitmproxy import ctx, flowfilter

'''
拼多多果园答题竞赛辅助脚本(mitmproxy)
'''

searchengines = {"baidu": "https://www.baidu.com/s?wd=", "sogou": "https://www.sogou.com/sogou?query="}
testdata = r'{"server_time":1577800664,"has_result":true,"ant_in_room_message_payload":"{\"type\":1,\"uid\":6371513949,\"roomId\":\"2019123101300475045\",\"teamId\":\"2019123101241232316\",\"round\":1,\"teamLeaderUid\":null,\"userInfoVOList\":null,\"answer\":null,\"status\":1,\"basisForJudgment\":null,\"friendStatus\":[{\"uid\":6371513949,\"alive\":true}],\"intervalTime\":19,\"endTime\":1577800680,\"questionType\":1,\"question\":\"5的立方是多少？\",\"options\":\"[{\\\"index\\\":\\\"A\\\",\\\"item\\\":\\\"125\\\"},{\\\"index\\\":\\\"B\\\",\\\"item\\\":\\\"155\\\"}]\",\"aliveMembers\":200,\"rank\":null,\"rewardDetailVO\":null,\"driverCardCount\":null,\"freeGames\":null}"}'

class PDDQuizHelper:
    '''
    API: http://api.yangkeduo.com/
    '''
    def __init__(self):
        # 添加一个过滤器，只处理问题包
        # 用flowfilter.match(self.filter, flow)
        self.filter = flowfilter.parse('~u api.yangkeduo.com/api/battle/room/query/result')

    def request(self, flow):
        '''
        POST /api/battle/room/query/result?pdduid="一个10位数字ID"
        '''
        if 'api/battle/room/query/result' in flow.request.path:
            ctx.log.info(u'请求问题')

    def response(self, flow):
        if 'api/battle/room/query/result' in flow.request.path:
            text = flow.response.text
            flow.response.text = modify(text)


def modify(text):
    content = json.loads(text)
    if 'ant_in_room_message_payload' in content:
        ctx.log.info(u'成功识别JSON,开始修改')
        data = json.loads(content['ant_in_room_message_payload'])
        question = data['question']
        options = json.loads(data['options'])
        ctx.log.info('question: %s, options: %s' % (question, options))
        options = search(question, options)
        data['options'] = json.dumps(options)
        content['ant_in_room_message_payload'] = json.dumps(data)
        return json.dumps(content)
    else:
        ctx.log.info(u'无效的JSON')
        return text


def search(question, options):
    '''
    From https://github.com/chxj1992/hortor_cheater
    '''
    url = quote(searchengines['sogou'] + question, safe = string.printable)
    # headers = {"User-Agent": "android Mozilla/5.0 (Linux; Android 4.4.4; HM NOTE 1S Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36  phh_android_version/4.84.0 phh_android_build/102dc018f1e7053e9406eac3241f1f9bdf4a4c04 phh_android_channel/wxactivity_lite_6m_l app_type/lite pversion/0"}
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36 SE 2.X MetaSr 1.0"}
    r = requests.get(url, headers = headers)
    r.encoding = "UTF-8"
    content = r.text
    answer = []
    for option in options:
        count = content.count(option['item'])
        ctx.log.info('option %s: %s, count: %s' % (option['index'], option['item'], count))
        newoption = option.copy()
        newoption["item"] = option['item'] + ' [' + str(count) + ']'
        answer.append(newoption)
    return answer

addons = [
    PDDQuizHelper()
]

# 测试用
if __name__ == "__main__":
    print('Test')
    print(modify(testdata))
