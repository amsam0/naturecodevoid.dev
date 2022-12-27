<script lang="ts">
    import { supabase } from "$lib/db";
    import dayjs from "dayjs";
    import timezone from "dayjs/plugin/timezone";
    import utc from "dayjs/plugin/utc";
    import { onDestroy } from "svelte";

    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.guess();

    const size = 100;
    const cooldown = 2;
    let error: string | null = null;

    type Square = { square_num: number; color: number; updated_at: string };

    let promise = supabase.from("canvas").select("*").neq("square_num", "-1") as unknown as Promise<{
        data: Square[];
    }>;
    let timePromise = supabase.from("canvas").select("*").eq("square_num", "-1") as unknown as Promise<{
        data: Square[];
    }>;
    timePromise.then(({ data }) =>
        // this retriggers the if block when the timeout finishes, if you know a better way to do this please tell me
        setTimeout(() => (timePromise = new Promise((resolve) => resolve({ data } as { data: Square[] }))), timeStringToTimeout(data![0].updated_at).diff(dayjs())),
    );

    supabase
        .channel("public:canvas")
        .on("postgres_changes", { event: "*", schema: "public", table: "canvas" }, (payload) => {
            console.log("Change received!", payload);
            const square = payload.new as Square;
            if (square.square_num == -1) {
                timePromise = new Promise((resolve) => {
                    // this retriggers the if block when the timeout finishes, if you know a better way to do this please tell me
                    setTimeout(() => (timePromise = new Promise((resolve) => resolve({ data: [square] }))), timeStringToTimeout(square.updated_at).diff(dayjs()));
                    resolve({ data: [square] });
                });
                return;
            }
            const squares = document.querySelectorAll(".square");
            if (squares.length != size * size) return;
            (squares.item(square.square_num - 1) as HTMLElement).style.backgroundColor = colorNumToColor(square.color);
        })
        .subscribe();

    onDestroy(() => {
        supabase.removeAllChannels();
        console.log("Unsubscribed from channels");
    });

    const colors = {
        "0": "#000000", // black
        "1": "#ffffff", // white
        "2": "#fc1d11", // red
        "3": "#fcaa11", // orange
        "4": "#fbff00", // yellow
        "5": "#3fb205", // green
        "6": "#055eb2", // dark blue
        "7": "#6202fc", // dark purple
        "8": "#f267fc", // pink
        "9": "#67d2fc", // sky blue
        "10": "#00fc19", // lime
        "11": "#704902", // brown
        "12": "#c01d11", // dark red
        "13": "#ad750c", // dark orange
        "14": "#b3b300", // dark yellow
        "15": "#089cff", // blue
        "16": "#b88efa", // light purple
        "17": "#f2a7fc", // light pink
        "18": "#fa948e", // light red
        "19": "#fac564", // light orange
        "20": "#fbff90", // light yellow
        "21": "#87fa91", // light green
        "22": "#a26bfa", // purple
        "23": "#575757", // dark grey
        "24": "#a1a1a1", // light grey
    };

    function colorNumToColor(num: number) {
        return (colors as { [i: string]: string })[num.toString()] || "#f802fc";
    }

    function colorToColorNum(color: string) {
        return Object.fromEntries(Object.entries(colors).map(([key, value]) => [value, key]))[color] || "-1";
    }

    function timeStringToTimeout(time: string) {
        return dayjs.utc(time).add(cooldown, "minutes");
    }

    function chooseOption() {
        // @ts-ignore
        const self = this as HTMLDivElement;
        document.querySelectorAll(".option-active").forEach((e) => e.classList.remove("option-active"));
        self.classList.add("option-active");
    }

    function chooseSquare() {
        // @ts-ignore
        const self = this as HTMLDivElement;
        document.querySelectorAll(".square-active").forEach((e) => e.classList.remove("square-active"));
        self.classList.add("square-active");
    }

    async function place() {
        const color = document.querySelector(".option-active") as HTMLElement;
        if (!color) return alert("Select a color before placing");

        const square = document.querySelector(".square-active");
        if (!square) return alert("Select a square before placing");

        // @ts-ignore
        if ((this as HTMLDivElement).classList.contains("disabled"))
            return (error = `Placing is currently on cooldown. Please wait until ${timeStringToTimeout((await timePromise).data[0].updated_at)
                .tz()
                .format("h:mm:ss A")}`);

        error = "";

        const squares = [...document.querySelectorAll(".square")];
        const squareNum = squares.indexOf(square) + 1;

        let colorVal = color.style.backgroundColor;
        if (colorVal.startsWith("rgb")) {
            // https://stackoverflow.com/a/13070198
            colorVal =
                "#" +
                colorVal
                    .replaceAll(" ", "")
                    .split("(")[1]
                    .split(")")[0]
                    .split(",")
                    .map(function (x) {
                        // For each array element
                        x = parseInt(x).toString(16); // Convert to a base16 string
                        return x.length == 1 ? "0" + x : x; // Add zero if we get only one character
                    })
                    .join("");
        }

        console.log(
            await supabase
                .from("canvas")
                .update({ color: colorToColorNum(colorVal) })
                .eq("square_num", squareNum.toString()),
        );
    }

    function onKeyPress(e: KeyboardEvent) {
        if (e.key == "Enter" || e.keyCode == 13) {
            e.preventDefault();
            place();
        }
    }
</script>

<svelte:window on:keypress={onKeyPress} />

<h4>
    This is a simple 100x100 r/place inspired canvas. There is a global placing cooldown of {cooldown} minutes. Expect mobile to be pretty buggy, but it should be useable. I also made a
    <a href="https://github.com/naturecodevoid/canvas-bot" target="_blank" rel="noreferrer"> bot </a> if you don't want to place pixels manually. Also, you can use the enter key instead of having to press
    the place button.
</h4>

{#await timePromise then { data }}
    {#if timeStringToTimeout(data[0].updated_at).diff(dayjs()) > 0}
        <h4>
            You will be able to place a new square at {timeStringToTimeout(data[0].updated_at).tz().format("h:mm:ss A")}
        </h4>
    {:else}
        <h4>You can place a new square right now!</h4>
    {/if}
{/await}

{#await promise}
    <h4>Waiting for data...</h4>
{:then { data }}
    <div class="place-grid">
        <div class="place">
            {#each [0, 24, 23, 1, 18, 2, 12, 19, 3, 13, 11, 20, 4, 14, 21, 10, 5, 9, 15, 6, 16, 22, 7, 17, 8] as i}
                <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="option" style="background-color: {colorNumToColor(i)};" on:click={chooseOption} />
            {/each}
            {#await timePromise then { data }}
                <button class="place-button{timeStringToTimeout(data[0].updated_at).diff(dayjs()) > 0 ? ' disabled' : ''}" on:click={place}> Place </button>
            {/await}
        </div>
        <div class="grid">
            {#each data.sort((a, b) => a.square_num - b.square_num) as square}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="square" style="background-color: {colorNumToColor(square.color)};" on:click={chooseSquare} />
            {/each}
        </div>
    </div>
{:catch error}
    <h4 style="color: red;">{error}</h4>
{/await}

{#if error}
    <h4 style="color: red;">{error}</h4>
{/if}

<style>
    :root {
        --box-size: 0.75vw;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(100, var(--box-size));
        min-width: calc(var(--box-size) * 100);
        min-height: calc(var(--box-size) * 100 - 2px);
    }

    .square {
        width: var(--box-size);
        height: var(--box-size);
    }

    .place-grid {
        max-width: calc(var(--box-size) * 100 + 15vw);
        display: grid;
        grid-template-areas: "place grid";
    }

    .place {
        width: 15vw;
        max-width: 100px;
        /* max-height: calc(var(--box-size) * 100); */
        background: var(--bg-color);
        display: grid;
        grid: repeat(auto-fill, calc(((var(--box-size) * 100 - 5px) / 13))) / auto-flow calc(50% - 2px);
        border: 1px solid var(--bg-shadow-color);
        border-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .option {
        /* width: calc(15vw - 80px);
        max-width: calc(15vw - 80px); */
        /* height: calc(72vh / 17 - 10px); */
        border: solid 5px transparent;
        border-radius: 10px;
        margin-left: 5px;
        margin-top: 5px;
        transition: border 0.25s linear;
    }

    .option:nth-child(13) {
        margin-bottom: 5px;
    }

    .place-button {
        margin: 5px;
        margin-right: 0;
        padding-inline: 0;
        padding-block: 0;
        box-shadow: none;
    }
</style>
