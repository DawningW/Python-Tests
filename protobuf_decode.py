#!/usr/bin/env python3
# coding=utf-8

import os
import subprocess
import optparse
import chardet

def oct2str(str):
    '''
    将八进制转义后直接输出的字符串转为UTF-8编码字符串
    例如b'\\345\\244\\232\\351\\200\\211\\351\\242\\230' -> '多选题'
    '''
    result = bytearray()
    i = 0
    while i < len(str):
        if str[i] == 92: # '\'
            oct = str[i + 1 : i + 4]
            if oct.isdigit():
                result.append(int(oct, 8))
                i += 4
                continue
        result.append(str[i])
        i += 1
    detected = chardet.detect(result)
    print(detected)
    return result.decode(detected["encoding"]) # 如果报错请自行修改编码

if __name__ == '__main__':
    print("Welcome to use protobuf decoder. Made by wc")
    parser = optparse.OptionParser("%prog [-o[utput] <file>] input_file")
    parser.add_option("--output", "-o", dest = "output", default=None, help="the output file path")
    options, args = parser.parse_args()
    args.append("request_body.bin")
    if len(args) >= 1:
        with open(args[0], "rb") as file_input:
            process = None
            try:
                process = subprocess.Popen(["protoc", "--decode_raw"],
                    stdin=file_input, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                output, error = process.communicate(None)
                if error != None and len(error) > 0:
                    print("Error: " + error.decode("UTF-8"))
                else:
                    data = oct2str(output)
                    if options.output is None:
                        print(data)
                    else:
                        with open(options.output, "wb") as file_out:
                            file_out.write(data.encode("utf-8"))
                    print("protobuf反序列化已完成, 感谢您的使用!")
            except Exception as e:
                print("Error: " + str(e))
                print("请检查您的protoc是否在PATH环境变量中")
            finally:
                if process != None and process.poll() != 0:
                    process.wait()
    else:
        parser.print_usage()
