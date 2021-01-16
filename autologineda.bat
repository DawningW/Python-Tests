@echo off

set name=None
for /f "tokens=1,2,3" %%i in ('netsh WLAN show interfaces') do (
if [%%i]==[SSID] set name=%%k
)
echo 当前连接的WIFI是:%name%

if "%name%"=="WC-5G" echo 请手动修改脚本
:: if "%name%"=="DLUT-EDA" autologindlut.py 学号 密码
