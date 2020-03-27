# 计算圆周率
import math
import random

# 统计学法:几何概型
# n / i = PI / 4
def statistics(keeprunning = True, times = 1):
    i = 0
    n = 0
    result = 0
    while keeprunning or i < times:
        i += 1
        x, y = random.uniform(-1, 1), random.uniform(-1, 1)
        if x ** 2 + y ** 2 < 1:
            n += 1
        result = n * 4 / i
        print("Time: " + str(i) + ", Current: " + str(result))
    return result

# 几何法:割圆术
# n * a = PI * d
def cyclotomic(keeprunning = True, times = 1):
    if keeprunning == True or times > 30:
        keeprunning = False
        times = 30
        print("The max time is 30!")
    i = 0
    n, a = 6, 1
    result = 0
    while keeprunning or i < times:
        i += 1
        n *= 2
        x = (a / 2) ** 2
        y = (1 - math.sqrt(1 - x)) ** 2
        a = math.sqrt(x + y)
        print("x^2: " + str(x) + ", y^2: " + str(y) + ", new a: " + str(a))
        result = n * a / 2
        print("Time: " + str(i) + ", Current: " + str(result))
    return result

# 公式
# PI / 4 = 1 - 1 / 3 + 1 / 5 - 1 / 7 + ...
def expression(keeprunning = True, times = 1):
	i = 0
	sign = 1
	n = 1
	result = 0
	while keeprunning or i < times:
		i += 1
		sign = -sign
		a = sign / (2 * i + 1)
		print("This item: " + str(a))
		n += a
		result = 4 * n
		print("Time: " + str(i) + ", Current: " + str(result))
	return result

# 开始执行
print("Hello pi!")
keeprunning = False
times = int(input("Please enter times: "))
if times <= 0:
    keeprunning = True
    times = 0
result = math.pi
print("0: statistics\n1: cyclotomic\n2: expression")
type = int(input("Choose calculative type: "))
if type == 0:
    result = statistics(keeprunning, times)
elif type == 1:
    result = cyclotomic(keeprunning, times)
elif type == 2:
    result = expression(keeprunning, times)
else:
    print("No such type!")
print("Complete! The time is " + str(times))
print("The result is " + str(result))
input("Press Enter to exit! ")
