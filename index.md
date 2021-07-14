---
layout: default
title: "Home"
---

## {{ page.title }}

### Welcome to naturecodevoid.dev!

I like coding and gaming. 😃

Main languages: TypeScript/JavaScript, Java, Python

### Stuff I've worked on

#### <img src="https://raw.githubusercontent.com/naturecodevoid/naturecodevoid/main/assets/repo.svg"> [naturecodevoid](https://github.com/naturecodevoid) / [RandomTextGenerator](https://github.com/naturecodevoid/RandomTextGenerator#readme)

A script to generate a random sequence of characters.

#### <img src="https://raw.githubusercontent.com/naturecodevoid/naturecodevoid/main/assets/repo.svg"> [ct-js](https://github.com/ct-js) / [ct-js](https://github.com/ct-js/ct-js#readme)

An easy to use 2D game engine.

#### <img src="https://raw.githubusercontent.com/naturecodevoid/naturecodevoid/main/assets/repo.svg"> [naturecodevoiddev](https://github.com/naturecodevoiddev) / [HypixelUtils](https://github.com/naturecodevoiddev/HypixelUtils#readme)

Minecraft 1.8.9 forge mod with random stuff.

#### <img src="https://raw.githubusercontent.com/naturecodevoid/naturecodevoid/main/assets/repo.svg"> [naturecodevoid](https://github.com/naturecodevoid) / [hide-username](https://github.com/naturecodevoid/hide-username#readme)

Utility to replace all characters of the current user's username with an asterisk

##### [More stuff](https://naturecodevoid.dev/projects#other)

### Contact me

<script type="text/javascript">
    function contact() {
        const two = "Discord: ";
        const one = "n" + "a" + "t" + "u" + "r" + "e";
        const three = "c" + "o" + "d" + "e";
        const five = "v" + "o" + "i" + "d";
        const x = 659000845163251 / 246907793;
        const otherSocials = `<i class="fab fa-twitter"></i> Twitter: @${one + three + five}`;
        function run(
            a = '<i class="fab fa-discord"></i> ' +
                two +
                one +
                three +
                five +
                "#" +
                ((96435 * 34248723478) / 1234538965 - (8746921133 % 53) - x).toString(),
            b = "\n\n",
        ) {
            try {
                alertify.alert("Contact me", (a + b + otherSocials).toString().replaceAll("\n", "<br />"));
            } catch (e) {
                alert(a + b + otherSocials);
            }
        }
        run();
    }

    if (window.location.toString().endsWith("#contact")) {
        window.addEventListener("load", () => setTimeout(contact, 1 * 500));
    }
</script>

<button onclick="contact();" class="w3-button w3-white">Click to show</button>
