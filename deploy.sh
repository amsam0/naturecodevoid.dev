#!/usr/bin/env sh

set -e

bun run build

cd build

cp ../.gitignore .
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/naturecodevoid/naturecodevoid.dev.git main:gh-pages

cd -
