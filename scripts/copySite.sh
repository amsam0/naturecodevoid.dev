#!/bin/sh

cd "$PWD"

SITE_NAME="naturecodevoid.github.io"

sh ./buildLocal.sh

cd "$PWD"

cp -v -f -R "../_site/." "../../$(echo $SITE_NAME)_siteCopy"
cp -v -f -R "../../$(echo $SITE_NAME)_gh-pages/.git/." "../../$(echo $SITE_NAME)_siteCopy/.git"
cp -v -f -R "../_site/." "../../$(echo $SITE_NAME)_gh-pages"
cp -v -f -R "../../$(echo $SITE_NAME)_siteCopy/.git/." "../../$(echo $SITE_NAME)_gh-pages/.git"
