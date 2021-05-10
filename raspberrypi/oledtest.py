#!/usr/bin/env python3
# coding=utf-8

import os
import sys
import subprocess
import time
from datetime import datetime
import psutil
from PIL import ImageFont
from luma.core.interface.serial import i2c, spi
from luma.oled.device import ssd1306
from luma.core.render import canvas

from netinfo import get_ip_address

def bytes2human(n):
    symbols = ('K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y')
    prefix = {}
    for i, s in enumerate(symbols):
        prefix[s] = 1 << (i + 1) * 10
    for s in reversed(symbols):
        if n >= prefix[s]:
            value = int(float(n) / prefix[s])
            return '%s%s' % (value, s)
    return "%sB" % n

def uptime_info():
    uptime = datetime.now() - datetime.fromtimestamp(psutil.boot_time())
    return "Uptime: %s" % (str(uptime).split('.')[0])

def temp_info():
    temperature = subprocess.getoutput("vcgencmd measure_temp")
    return temperature[5:-2]

def cpu_info():
    av1, av2, av3 = os.getloadavg()
    return "Load: %.1f %.1f %.1f" % (av1, av2, av3)

def mem_info():
    mem = psutil.virtual_memory()
    return "Mem: %s/%s %.0f%%" % (bytes2human(mem.used), bytes2human(mem.total), 100 - mem.percent)

def disk_info(dir = "/"):
    disk = psutil.disk_usage(dir)
    return "SD: %s/%s %.0f%%" % (bytes2human(disk.used), bytes2human(disk.total), disk.percent)

def net_info(iface = "lo"):
    net = psutil.net_io_counters(pernic = True)[iface]
    addr = psutil.net_if_addrs()[iface]
    # return "%s: Tx%s, Rx%s" % (iface, bytes2human(net.bytes_sent), bytes2human(net.bytes_recv))
    return "%s: %s" % (iface, addr[0].address)

def draw_stats(device):
    # font2 = ImageFont.truetype(font_path, 12)
    with canvas(device) as draw:
        draw.text((0, 0), uptime_info(), fill="white")
        draw.text((101, 0), temp_info(), fill="white")
        draw.text((0, 12), cpu_info(), fill="white")
        draw.text((0, 24), mem_info(), fill="white")
        draw.text((0, 36), disk_info(), fill="white")
        try:
            draw.text((0, 48), net_info("wlan0"), fill="white")
            # draw.text((0, 48), "wlan0: " + get_ip_address(b'wlan0'), fill="white")
        except KeyError:
            draw.text((0, 48), "net: no wifi", fill="white")

if __name__ == "__main__":
    try:
        print("Start oled monitor")
        serial = spi()
        device = ssd1306(serial)
        while True:
            draw_stats(device)
            time.sleep(30)
    except KeyboardInterrupt:
        sys.exit()
