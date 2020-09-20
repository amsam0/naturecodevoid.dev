#!/bin/sh

cd "$PWD"

sh ./buildLocal.sh

cd "$PWD"

cp -v -f -R "../_site" "../../naturecodevoid.github.io_siteCopy"
cp -v -f -R "../../naturecodevoid.github.io_gh-pages/.git" "../../naturecodevoid.github.io_siteCopy/.git"
cp -v -f -R "../_site" "../../naturecodevoid.github.io_gh-pages"
cp -v -f -R "../../naturecodevoid.github.io_siteCopy/.git" "../../naturecodevoid.github.io_gh-pages/.git"