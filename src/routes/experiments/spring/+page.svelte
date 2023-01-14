<!-- based on https://svelte.dev/examples/spring -->
<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { spring } from "svelte/motion";

    const coords = spring(
        { x: 0, y: 0 },
        {
            stiffness: 0.1,
            damping: 0.25,
        },
    );

    let delay = 0;

    let circles: HTMLDivElement;

    onMount(() => {
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
        document.body.style.overflow = "hidden";

        coords.subscribe(({ x, y }) => {
            if (!circles || !("children" in circles)) return;

            for (let i = 0; i < circles.children.length; i++) {
                const element = circles.children.item(i)!;
                setTimeout(() => {
                    element.children.item(0)!.setAttribute("cx", x.toString());
                    element.children.item(0)!.setAttribute("cy", y.toString());
                }, delay * i);
            }
        });
    });

    onDestroy(() => {
        document.body.style.userSelect = "";
        document.body.style.webkitUserSelect = "";
        document.body.style.overflow = "";
    });

    function addCircle() {
        circles.appendChild(circles.children.item(0)!.cloneNode(true));
    }

    function removeCircle() {
        if (circles.children.length <= 1) return;
        circles.children.item(circles.children.length - 1)!.remove();
    }
</script>

<svelte:window on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })} on:touchmove={(e) => coords.set({ x: e.touches[0].clientX, y: e.touches[0].clientY })} />

<div>
    <label>
        <h3>stiffness ({coords.stiffness})</h3>
        <input bind:value={coords.stiffness} type="range" min="0.01" max="0.5" step="0.01" />
    </label>

    <label>
        <h3>damping ({coords.damping})</h3>
        <input bind:value={coords.damping} type="range" min="0.01" max="0.5" step="0.01" />
    </label>

    <label>
        <h3>circle delay in MS ({delay})</h3>
        <input bind:value={delay} type="range" min="0" max="2000" step="10" />
    </label>

    <br />
    <button on:click={addCircle}>add circle</button>
    &nbsp;
    <button on:click={removeCircle}>remove circle</button>
</div>

<div bind:this={circles}>
    <svg>
        <circle cx={0} cy={0} r={10} />
    </svg>
</div>

<style>
    h3 {
        margin-block: 0 0;
    }

    svg {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    circle {
        fill: #00d49f;
    }
</style>
