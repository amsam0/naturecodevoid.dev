call cd /D "%~dp0"

call cmd /c "buildLocal.bat"
:: Copy to the site copy
call robocopy ../_site ../../naturecodevoid.github.io_siteCopy /MIR
:: Copy the gh-pages git folder
call robocopy ../../naturecodevoid.github.io_gh-pages/.git ../../naturecodevoid.github.io_siteCopy/.git /MIR
:: Copy to gh-pages
call robocopy ../_site ../../naturecodevoid.github.io_gh-pages /MIR
:: Copy .git folder to gh-pages
call robocopy ../../naturecodevoid.github.io_siteCopy/.git ../../naturecodevoid.github.io_gh-pages/.git /MIR
call cd ../
:: call git checkout gh-pages
call cd ../