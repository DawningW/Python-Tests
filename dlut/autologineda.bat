@echo off

set name=None
for /f "tokens=1,2,3" %%i in ('netsh WLAN show interfaces') do (
if [%%i]==[SSID] set name=%%k
)
echo ��ǰ���ӵ�WIFI��:%name%

echo ���ֶ��޸Ľű�
:: if "%name%"=="DLUT-EDA" autologindlut.py ѧ�� ����
