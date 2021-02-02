
import subprocess,sys

if  sys.platform.startswith('linux'):
    # Linux-specific code here...
    p = subprocess.Popen(['sh', './install.sh'], stdout=sys.stdout)
elif sys.platform.startswith('win32'):
    # Win-specific code here...
    p = subprocess.Popen(['powershell.exe', './install.ps1'], stdout=sys.stdout)
elif sys.platform.startswith('darwin'):
    print(3)