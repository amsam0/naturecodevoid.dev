<script lang="ts">
    function showDiscordTag(this: HTMLAnchorElement) {
        if (this.textContent!.includes("(")) return;
        this.textContent += ` (if the link doesn't work, my tag is ${atob(atob("Ym1GMGRYSmxZMjlrWlhadmFXUWpOakkxTXc9PQ=="))})`;
    }
</script>

<a href="https://weather.naturecodevoid.dev/" target="_blank" rel="noreferrer">weather app</a><br />
<br />

<a href="https://github.com/naturecodevoid" target="_blank" rel="noreferrer">github</a><br />
<a href="https://github.com/naturecodevoiddev" target="_blank" rel="noreferrer">github org</a><br />
<!-- thanks https://jjtech.dev/discord-profile-link/ -->
<a href="https://discord.com/users/404300687711797248" target="_blank" rel="noreferrer" on:click={showDiscordTag}>discord</a><br />
<a href="https://mas.to/@naturecodevoid" target="_blank" rel="me noreferrer">mastodon</a><br />
<a href="https://twitter.com/naturecodevoid" target="_blank" rel="noreferrer">twitter</a> (inactive)<br />
