#!/bin/sh

cp -v ./build/index.html ./build/404.html

mkdir -v ./build/contact
cp -v ./build/index.html ./build/contact/index.html
cp -v ./build/index.html ./build/contact.html

mkdir -v ./build/discord
cp -v ./build/index.html ./build/discord/index.html
cp -v ./build/index.html ./build/discord.html

mkdir -v ./build/portfolio
cp -v ./build/index.html ./build/portfolio/index.html
cp -v ./build/index.html ./build/portfolio.html

mkdir -v ./build/tools
cp -v ./build/index.html ./build/tools/index.html
cp -v ./build/index.html ./build/tools.html
