import time
import re
import requests
import json

url = "https://gitee.com/react-native-oh-library/usage-docs/raw/master/README.md"

libs = []

response = requests.get(url)
response.encoding = "utf-8"
body = response.text
# print(body)
find_header = False
for line in body.split("\n"):
    if not find_header:
        if line.startswith("| ---- |"):
            find_header = True
        continue
    if len(line.strip()) == 0:
        break
    items = line.split("|")
    items = [item.strip() for item in items]
    items = [item for item in items if item]
    # print(items)
    id = int(items[0])
    match = re.search(r"\[(.*)\]\((.*)\)", items[1])
    name = match.group(1)
    link = match.group(2)
    version = items[2]
    print(f"正在处理第{id}个库：{name}")
    repo_url = "https://api.github.com/repos/" + "/".join(link.split("/")[3:5])
    response = requests.get(repo_url, headers={
        # "Accept": "application/vnd.github.v3+json",
        "Authorization": "Bearer <your_github_token_here>"
    })
    data = response.json()
    # print(str(data))
    stars = int(data["stargazers_count"])
    libs.append([id, name, link, version, stars])
    # time.sleep(0.1)

libs.sort(key=lambda x: x[4], reverse=True)
with open("ohos_libs.csv", "w", encoding="utf-8") as f:
    f.write("序号,库名,库链接,鸿蒙可用版本,stars\n")
    for lib in libs:
        f.write(",".join([str(item) for item in lib]) + "\n")
