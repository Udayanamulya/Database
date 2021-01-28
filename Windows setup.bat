@echo off
@echo Welcome To Windows 10 Setup!
@echo Create Partition Using Diskpart
pause
diskpart
@echo Deploying The Image
pause
dism /apply-image /imagefile:install.wim /index:6 /applydir:c:\
@echo creating boot file...
bcdboot C:\Windows /s W:
@echo Congratulations Windows 10 Instaled On Your computer
pause
wpeutil reboot