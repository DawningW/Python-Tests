import math

def similarity(v1, v2):
    numerator = sum([a * b for a, b in list(zip(v1, v2))])
    den1 = math.sqrt(sum([math.pow(item, 2) for item in v1]))
    den2 = math.sqrt(sum([math.pow(item, 2) for item in v2]))
    return numerator / (den1 * den2)

str1 = input("请输入向量A: ")
vector1 = [float(i) for i in str1.split()]
str2 = input("请输入向量B: ")
vector2 = [float(i) for i in str2.split()]
ans = similarity(vector1, vector2)
print("向量A与B的余弦相似度为: {}".format(ans))
