filepath = './input.txt'
num0 = 0
num1 = 0

with open(filepath, 'rb') as file:
    while True:
        abyte = file.read(1)
        if abyte == b"":
            break
        byte2 = int.from_bytes(abyte, byteorder='little')
        for i in range(8):
            bit = byte2 & (0x1 << i)
            if bit == 0:
                num0 += 1
            else:
                num1 += 1
print("0: {}".format(num0 / (num0 + num1)))
print("1: {}".format(num1 / (num0 + num1)))
