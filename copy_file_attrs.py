#!/usr/bin/env python3
# coding=utf-8

import os
import shutil

src = './src'
dst = './dst'
result_file_path = 'result.log'

if __name__ == '__main__':
    result_file = open(result_file_path, 'w')
    for root, dirs, files in os.walk(src):
        for file in files:
            src_file = os.path.join(root, file)
            dst_file = src_file.replace(src, dst, 1)
            if os.path.exists(dst_file):
                shutil.copystat(src_file, dst_file)
                print(f'Copy file attrs: {src_file} -> {dst_file}')
                result_file.write(f'Copy file attrs: {src_file} -> {dst_file}\n')
            else:
                print(f'file not exists: {dst_file}')
                result_file.write(f'file not exists: {dst_file}\n')
            result_file.flush()
    print('Done!')
    result_file.close()
