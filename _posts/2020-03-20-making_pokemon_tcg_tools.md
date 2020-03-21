---
layout: post
author: "naturecodevoid"
title: "Making Pokemon TCG Tools"
---

### What's Pokemon TCG Tools?

Pokemon TCG Tools is a website I made for help TCG players improve. You can see it
[here](https://naturecodevoid.github.io/PokemonTCG_Tools).

### So, how did I make it?

I started by getting Ruby and Jekyll, which, annoyingly, took a lot of troubleshooting to install. Then, I ran
`jekyll new PokemonTCG_Tools --blank`, and got to work.

The first thing I did was change the styling, then started working on things like the navigation bar. The styling of
navigation bar took me a _long_ time to figure it out, but eventually I got it where I wanted. Around this time I also
cleaned up all of the other files, which helped the website a lot.

Next, I quickly put some links in the links page, and got to work on the price checker. Basically, you enter the card
name into the input box, and it inserts that text into the search url of TCGplayer. (I'm also looking into using their
api instead of redirecting, so stay tuned!)

The next thing I did was add the best card for _x_ action page. All it does is loops through a json file containing data
about the cards, and prints them in a list. <br><br> The next day, I added 3 pages, and improved that data for best card
for _x_ action. The first page I added was a deck lists page. This has information on decks other people have used, and
is currently empty. I'm hoping to add a deck or two in the next few days, but other projects might have more priority.

The next page I added was the strategy finder page. It's very similar to the deck lists, but has strategies.

I also added some tips to the tips page, and a contributing guide.

The next day, I was ready to make it public. I added a script that would copy the site contents to another folder, so I
could switch to the `gh-pages` branch and paste everything in. I also quickly fixed the Jekyll config, and rebuilt
everything. I also made a template for a jekyll website (currently it is private) based on the website, and used it to
redo my main website. Using GitHub Pages to host the website, the website was complete. Today I rolled in a few quick
fixes, and I'm looking into using the TCGplayer api. That's basically it!
