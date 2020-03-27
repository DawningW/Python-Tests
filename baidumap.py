# -*- coding: utf-8 -*- 
# 下载百度地图街景
import urllib
import requests
import hashlib
import os
import time
from enum import Enum, unique

@unique
class CoordType(Enum):
    wgs84ll = "wgs84ll"# 卫星定位坐标
    gcj02 = "gcj02"# 国测局加密坐标
    bd09ll = "bd09ll"# 百度经纬度坐标
    bd09mc = "bd09mc"# 百度摩卡托坐标

class BaiduAPI:
    website = "http://api.map.baidu.com"
    __api_key = ""
    use_sn = False
    __secret_key = ""

    def __init__(self):
        pass

    def setAK(self, key):
        self.api_key = key
        return self

    def setSK(self, key):
        self.use_sn = True
        self.__secret_key = key
        return self

    def calculateSN(self, query):
        encoded = urllib.parse.quote(query, safe="/:=&?#+!$,;'@()*[]") + self.__secret_key
        return hashlib.md5(urllib.parse.quote_plus(encoded).encode("utf8")).hexdigest()

    def getViewStatic(self, width = 1024, height = 512, longitude = 123.520266, latitude = 41.954925,
                coordtype = CoordType.bd09ll, heading = 0, pitch = 15, fov = 90):
        params = {
            "ak": self.api_key,
            "width": width,
            "height": height,
            "location": "{0},{1}".format(longitude, latitude),
            "coordtype": coordtype.value,
            "heading": heading,
            "pitch": pitch,
            "fov": fov
        }
        try:
            request = requests.get(self.website + "/panorama/v2", params)
            return request.content
        except Exception as e:
            print(e)

    def saveViewStatic(self, coordtype = CoordType.bd09ll, longitude = 0, latitude = 0,
                   heading = 0, pitch = 15, fov = 90):
        content = self.getViewStatic(coordtype = coordtype, longitude = longitude, latitude = latitude,
                              heading = heading, pitch = pitch, fov = fov)
        if createFile("output", "{0}_{1}_{2}_{3}.png".format(longitude, latitude, heading, pitch), content):
            open("successed.csv", "a").writelines("{0},{1},{2},{3}\n".format(longitude, latitude, heading, pitch))
        else:
            open("failed.csv", "a").writelines("{0},{1},{2},{3}\n".format(longitude, latitude, heading, pitch))
        time.sleep(0.05)

    def analyseViewStatic(self, datas = []):
        for item in datas:
            item = str(item).strip()
            data = item.split(",")
            if len(data) == 2:
                for i in range(0, 360, 90):
                    self.saveViewStatic(CoordType.wgs84ll, data[0], data[1], i)
            elif len(data) == 3:
                self.saveViewStatic(CoordType.wgs84ll, data[0], data[1], data[2])
            elif len(data) == 4:
                self.saveViewStatic(CoordType.wgs84ll, data[0], data[1], data[2], data[3])
            else:
                self.saveViewStatic(CoordType(data[0]), data[1], data[2], data[3], data[4], data[5])
    
def createFile(path, file, content):
    try:
        if not os.path.exists(path):
            os.makedirs(path)
        open(path + "/" + file, "wb").write(content)
        return True
    except Exception as e:
        log(e)
        return False

def log(message):
    print(message)
    prefix = "[{}][{}] ".format(time.strftime("%H:%M:%S", time.localtime()), "Info")
    #open("logs.txt", "a").writelines(message)

map = BaiduAPI().setAK("DEn7LjUv0zXZvu7zkxODo2YPdEMERrEM")#.setSK("RnK0TyaKp8akGTXHCOIoxO9w2vyYEGLO")
map.analyseViewStatic(open("input.csv", "r").readlines())

input("Press Enter to exit")