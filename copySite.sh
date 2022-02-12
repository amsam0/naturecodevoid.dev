#!/bin/sh

SITE_NAME="naturecodevoid.github.io"

# https://stackoverflow.com/a/246128
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

cp -v -f -R "./build/." "./../$(echo $SITE_NAME)_siteCopy"
cp -v -f -R "./../$(echo $SITE_NAME)_gh-pages/.git/." "./../$(echo $SITE_NAME)_siteCopy/.git"
rm -v -f -R "./../$(echo $SITE_NAME)_gh-pages"
cp -v -f -R "./build/." "./../$(echo $SITE_NAME)_gh-pages"
cp -v -f -R "./../$(echo $SITE_NAME)_siteCopy/.git/." "./../$(echo $SITE_NAME)_gh-pages/.git"
