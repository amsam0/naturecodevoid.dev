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

-   [Node.js/javascript](https://nodejs.org/)
-   [Python](https://www.python.org/)
-   HTML/CSS
-   [Java](https://www.oracle.com/java/)
-   C/C++

#### Cool projects you should check out:

-   [ct.js game engine](https://ctjs.rocks/)
-   [Brave browser](https://brave.com/)
-   [Expo](https://expo.io/)
-   [vscode](https://code.visualstudio.com)
-   [Atom](https://atom.io/)
-   [OpenAI](https://openai.com/)

#### Contact me:

<script type="text/javascript">
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
            b = "\n\nOther socials:\n\n",
        ) {
            try {
                alertify
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
                    .set("labels", { ok: "Show other socials", cancel: "Ok" });
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

<button onclick="contact()">Click to show</button>
