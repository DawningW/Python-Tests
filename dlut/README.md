# 大连理工大学开发区校区校园网自动登录脚本
autologindlut.py 由Python编写的自动登录脚本(依赖Python3和requests库)

autologineda.bat Windows下的自动运行脚本的批处理, 可以手动修改后将其添加到计划任务中来达到自动执行的效果

(该批处理中可以保存学号和密码, 并且判断了当前是否连接至校园网, 计划任务里不能根据名字判断网络)

首先打开计划任务程序新建一个计划任务

在触发器选项卡里新建一个开始任务为工作站解锁时的触发器, 用于当登录时已连接校园网的话则自动执行脚本

再新建一个开始任务为发生事件时的触发器, 然后点击设置中的自定义, 再点击编辑事件筛选器, 在打开的编辑事件筛选器对话框中点击XML选项卡并填入以下XML语句(卡为正常现象, 虽然我并不理解为什么会卡)
```xml
<QueryList>
  <Query Id="0" Path="Microsoft-Windows-WLAN-AutoConfig/Operational">
    <Select Path="Microsoft-Windows-WLAN-AutoConfig/Operational">*[System[Provider[@Name='Microsoft-Windows-WLAN-AutoConfig'] and (EventID=8001)]][EventData[Data[@Name='SSID']='DLUT-EDA']]</Select>
  </Query>
</QueryList>
```
这是用于手动连接校园网时自动执行脚本的

最后享受脚本带来的便利吧~

~~*要是垃圾校园网支持mac绑定就用不着写这脚本了*~~
