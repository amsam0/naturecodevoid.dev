cd /D "%~dp0"

set SITE_NAME=naturecodevoid.github.io

cmd /c "buildLocal.bat"

cd /D "%~dp0"

robocopy /S /V ../_site ../../%SITE_NAME%_siteCopy /MIR
robocopy /S /V ../../%SITE_NAME%_gh-pages/.git ../../%SITE_NAME%_siteCopy/.git /MIR
robocopy /S /V ../_site ../../%SITE_NAME%_gh-pages /MIR
robocopy /S /V ../../%SITE_NAME%_siteCopy/.git ../../%SITE_NAME%_gh-pages/.git /MIR
