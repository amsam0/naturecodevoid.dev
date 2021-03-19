---
layout: default
title: "Home"
---

## {{ page.title }}

### Welcome to naturecodevoid.dev!

I like working on random projects! 😄

[Click here to see my primary projects!]({{ "/projects" | relative_url }})

<a href="https://github.com/naturecodevoid?tab=repositories" target="_blank">Click here to see all my repositores!</a>

#### Languages I like:

-   <a href="https://nodejs.org" target="_blank">Node.js/JavaScript</a>
-   <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>
-   <a href="https://www.oracle.com/java" target="_blank">Java</a>
-   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML/CSS</a>
-   <a href="https://www.python.org" target="_blank">Python</a>

#### Cool projects you should check out:

-   <a href="https://ctjs.rocks/" target="_blank">ct.js game engine</a>
-   <a href="https://wynncraft.com" target="_blank">Wynncraft</a>
-   <a href="https://brave.com" target="_blank">Brave browser</a>
-   <a href="https://expo.io" target="_blank">Expo</a>
-   <a href="https://code.visualstudio.com" target="_blank">vscode</a>
-   <a href="https://atom.io" target="_blank">Atom</a>
-   <a href="https://openai.com" target="_blank">OpenAI</a>

#### Contact me:

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
