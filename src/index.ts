// TODO: make indicator to scroll up/down for more after a few seconds of no scrolling

window.addEventListener("load", () => {
    // const socials = document.getElementsByClassName("social");

    const $ = (id: string) => document.getElementById(id);

    const util = {
        removeAnimation(element: Element) {
            element.classList.remove("aos-animate");
            element.classList.remove("aos-init");
            for (let i = 0; i < element.children.length; i++) {
                const e = element.children.item(i) as Element;

                // if (!e.classList.contains("social")) this.removeAnimation(e);
                this.removeAnimation(e);
            }
        },
        disableSocials() {
            // for (let i = 0; i < socials.length; i++) {
            //     const e = socials.item(i)!;
            //     e.setAttribute("data-aos_", e.getAttribute("data-aos")!);
            //     e.removeAttribute("data-aos");
            // }
        },
        enableSocials() {
            // for (let i = 0; i < socials.length; i++) {
            //     const e = socials.item(i)!;
            //     e.setAttribute("data-aos", e.getAttribute("data-aos_")!);
            //     e.removeAttribute("data-aos_");
            // }
        },
    };

    const main = (wait: boolean = true, push: boolean = true) => {
        document.title = "𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟";
        if (push) window.history.pushState({}, "𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/");
        else window.history.replaceState({}, "𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/");
        // window.location.hash = "";
        util.removeAnimation(document.getElementById("portfolio")!);
        util.removeAnimation(document.getElementById("tools")!);
        util.disableSocials();
        setTimeout(
            () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                document.getElementById("main")!.style.display = "block";
                document.getElementById("portfolio")!.style.display = "none";
                document.getElementById("tools")!.style.display = "none";
                (window as any).AOS.refresh();
                util.enableSocials();
            },
            wait ? 800 : 0,
        );
    };

    const portfolio = (wait: boolean = true, push: boolean = true) => {
        document.title = "𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘 | 𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟";
        if (push) window.history.pushState({}, "𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘 | 𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/portfolio");
        else window.history.replaceState({}, "𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘 | 𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/portfolio");
        // window.location.hash = "#portfolio";
        util.removeAnimation(document.getElementById("main")!);
        util.removeAnimation(document.getElementById("tools")!);
        util.disableSocials();
        setTimeout(
            () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                document.getElementById("main")!.style.display = "none";
                document.getElementById("portfolio")!.style.display = "block";
                document.getElementById("tools")!.style.display = "none";
                (window as any).AOS.refresh();
                util.enableSocials();
            },
            wait ? 800 : 0,
        );
    };

    const tools = (wait: boolean = true, push: boolean = true) => {
        document.title = "𝚃𝚘𝚘𝚕𝚜 | 𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟";
        if (push) window.history.pushState({}, "𝚃𝚘𝚘𝚕𝚜 | 𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/tools");
        else window.history.replaceState({}, "𝚃𝚘𝚘𝚕𝚜 | 𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/tools");
        // window.location.hash = "#tools";
        util.removeAnimation(document.getElementById("main")!);
        util.removeAnimation(document.getElementById("portfolio")!);
        util.disableSocials();
        setTimeout(
            () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                document.getElementById("main")!.style.display = "none";
                document.getElementById("portfolio")!.style.display = "none";
                document.getElementById("tools")!.style.display = "block";
                (window as any).AOS.refresh();
                util.enableSocials();
            },
            wait ? 800 : 0,
        );
    };

    /** Modals */
    const findChild = (element: Element, elementName: string) => {
        const children = element.children;
        for (let i = 0; i < children.length; i++) {
            const child = children.item(i)!;

            if (child.tagName == elementName.toUpperCase()) {
                return child;
            }
        }

        return null;
    };

    const openModal = (id: string) => {
        const modal = document.getElementById(id)!;

        modal.style.display = "initial";
        modal.style.animation = "modal-animate 0.75s ease-in-out";

        const closeModal = () => {
            modal.style.animation = "";
            setTimeout(() => {
                modal.style.animation = "modal-animate 0.75s ease-in-out reverse";
                setTimeout(() => {
                    modal.style.display = "none";
                    modal.style.animation = "";
                }, 700);
            }, 0);
        };

        window.onclick = function (event: Event) {
            if (event.target == modal) {
                closeModal();
            }
        };

        const closeButton = findChild(findChild(modal, "div")!, "span")!;

        closeButton.addEventListener("click", () => {
            closeModal();
        });
    };

    /** Page Switching */
    if (window.location.hash.includes("discord") || window.location.pathname.includes("discord")) {
        openModal("discord-modal");
        // window.location.hash = "#contact";
        window.scrollTo(0, document.body.scrollHeight);
        // setTimeout(() => {
        window.history.replaceState({}, "𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/discord");
        // }, 50);
    } else if (window.location.hash.includes("contact") || window.location.pathname.includes("contact")) {
        // window.location.hash = "#contact";
        window.scrollTo(0, document.body.scrollHeight);
        // setTimeout(() => {
        window.history.replaceState({}, "𝚗𝚊𝚝𝚞𝚛𝚎𝚌𝚘𝚍𝚎𝚟𝚘𝚒𝚍.𝚍𝚎𝚟", "/contact");
        // }, 50);
    } else {
        if (window.location.hash.includes("portfolio") || window.location.pathname.includes("portfolio")) {
            portfolio(false, false);
        } else if (window.location.hash.includes("tools") || window.location.pathname.includes("tools")) {
            tools(false, false);
        } else {
            main(false, false);
        }
    }

    /** Other */
    (window as any).discord = () => {
        openModal("discord-modal");
    };

    (window as any).main = () => {
        main();
    };
    (window as any).portfolio = () => {
        portfolio();
    };
    (window as any).tools = () => {
        tools();
    };

    $("timestamp")!.innerHTML = $("timestamp")!.innerHTML.replace(
        `<span style="color: #0095ff; text-decoration: none">Source</span>`,
        `<a href="https://github.com/naturecodevoid/timestamp" target="_blank" style="color: #0095ff; text-decoration: none">Source</a>`,
    );
    $("randomtext")!.innerHTML = $("randomtext")!.innerHTML.replace(
        `<span style="color: #0095ff; text-decoration: none">Source</span>`,
        `<a href="https://github.com/naturecodevoid/RandomTextGenerator" target="_blank" style="color: #0095ff; text-decoration: none">Source</a>`,
    );
});

export {};
