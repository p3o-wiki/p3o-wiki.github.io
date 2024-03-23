<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article>
	<h1>{data.title}</h1>
	<svelte:component this={data.content} />
</article>
