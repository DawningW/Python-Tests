#!/usr/bin/env python3
# coding=utf-8

import os

def unlock(input, output):
    while True:
        abyte = input.read(1)
        if abyte == b"":
            break
        byte2 = int.from_bytes(abyte, byteorder='little')
        # b11110110=246
        # b10100011=163
        byte3 = byte2 ^ 163
        output.write(byte3.to_bytes(length=1, byteorder='little'))
    return

if __name__ == '__main__':
    print("Welcome to use CloudMusic cache unlocker. Made by wc")
    for root, dirs, files in os.walk('.'):
        for name in files:
            fullpath = os.path.join(root, name)
            if fullpath.endswith(".uc"):
                print("Found %s. Start to unlock." % fullpath)
                with open(fullpath, 'rb') as file:
                    fullpath2 = fullpath.replace(".uc", ".mp3")
                    with open(fullpath2, 'wb') as result:
                        unlock(file, result)
            else:
                print("Skip %s." % fullpath)
