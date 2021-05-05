#!/usr/bin/env python3
# coding=utf-8

import os
import socket
import fcntl
import struct
"""
获取主机ip地址
参数:
ifname: 通过b'lo'获取的为环回地址, 通过b'eth0'获取的为主机ip地址
"""
def get_ip_address(ifname=b'lo'):
  try:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    return socket.inet_ntoa(fcntl.ioctl(
      s.fileno(),
      0x8915, # SIOCGIFADDR
      struct.pack("256s", ifname[:15])
    )[20:24])
  except:
    ips = os.popen("LANG=C ifconfig | grep \"inet addr\" | grep -v \"127.0.0.1\" | awk -F \":\" '{print $2}' | awk '{print $1}'").readlines()
    if len(ips) > 0:
      return ips[0]
  return "NULL"

if __name__ == "__main__":
  print("loopback:", get_ip_address())
  print("eth0:", get_ip_address(b'eth0'))
  print("wlan0:", get_ip_address(b'wlan0'))
  