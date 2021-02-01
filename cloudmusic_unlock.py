with open("test.uc","rb") as file:
    with open("output.mp3","wb") as result:
        while True:
            abyte = file.read(1)
            if abyte == b"":
                break
            byte2 = int.from_bytes(abyte, byteorder='little')
            byte3 = byte2 ^ 163
            result.write(byte3.to_bytes(length=1, byteorder='little'))
            # b11110110=246
            # b10100011=163
