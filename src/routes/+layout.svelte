<script lang="ts">
    import { page } from "$app/stores";

    let title: string;

    $: title = ($page.url.pathname.endsWith("/") ? $page.url.pathname.split("/").at(-2) : $page.url.pathname.split("/").at(-1)) || "home";
</script>

<svelte:head>
    <title>
        {title} | naturecodevoid.dev
    </title>
</svelte:head>

<h1>{title == "home" ? "naturecodevoid.dev" : title}</h1>

{#if !(title == "home")}<a href="/">home</a><br />{/if}
{#if !(title == "experiments")}<a href="/experiments">experiments</a><br />{/if}
<br />

<slot />
