---
layout: default
title: "Home"
---

## {{ page.title }}

### Welcome to [naturecodevoid.dev]({% link index.md %})!

I like working on random projects! 😄

[Click here to see my primary projects!]({% link projects.md %})

[Click here to see all my projects!](https://github.com/naturecodevoid?tab=repositories)

#### Languages I like:

<!-- <i class="fab fa-js-square"></i> <i class="fab fa-python"></i> <i class="fab fa-html5"></i> <i class="fab fa-java"></i> -->

-   [Node.js/javascript](https://nodejs.org/)
-   [Python](https://www.python.org/)
-   [HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [Java](https://www.oracle.com/java/)
-   [C/C++](https://en.wikipedia.org/wiki/C%2B%2B)

#### Cool projects you should check out:

-   [ct.js game engine](https://ctjs.rocks/)
-   [Wynncraft](https://wynncraft.com/)
-   [Brave browser](https://brave.com/)
-   [Expo](https://expo.io/)
-   [vscode](https://code.visualstudio.com)
-   [Atom](https://atom.io/)
-   [OpenAI](https://openai.com/)

#### Contact me:

<script type="text/javascript">
    // https://github.com/naturecodevoid/JSUtils/blob/master/src/replaceAll.js
    const replaceAll = (string, search, replace) => {
        return string.split(search).join(replace);
    };
    String.prototype.replaceAll = function(search = "", replace = "") {
        return replaceAll(this, search, replace);
    };

    function contact() {
        two = "Discord: ";
        one = "n" + "a" + "t" + "u" + "r" + "e";
        three = "c" + "o" + "d" + "e";
        five = "v" + "o" + "i" + "d";
        x = 659000845163251 / 246907793;
        otherSocials = `Twitter: @${one + three + five}`;
        function run(
            a = two +
                one +
                three +
                five +
                "#" +
                ((96435 * 34248723478) / 1234538965 - (8746921133 % 53) - x).toString(),
            b = "\n\n",
        ) {
            try {
                alertify.alert("naturecodevoid.dev", (a + b + otherSocials).toString().replaceAll("\n", "<br />"));
                /*alertify
                    .confirm(
                        "naturecodevoid.dev",
                        a,
                        () => {
                            setTimeout(() => {
                                alertify.alert("naturecodevoid.dev", otherSocials, () => {}).set("label", "Ok");
                            }, 10);
                        },
                        () => {},
                    )
                    .set("labels", { ok: "Show other socials", cancel: "Ok" });*/
            } catch (e) {
                alert(a + b + otherSocials);
            }
        }
        run();
    }

    if (window.location.toString().endsWith("#contact")) {
        window.addEventListener("load", () => setTimeout(contact, 1 * 1000));
    }
</script>

<button onclick="contact()" class="w3-button w3-white">Click to show</button>
