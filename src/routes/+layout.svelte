<script>
	import 'normalize.css'
	import House from 'phosphor-svelte/lib/House'
	import GearSix from 'phosphor-svelte/lib/GearSix'
</script>

<div class="navbar">
	<a title="Home" href="/"><House weight="fill" /></a>
	<a title="Settings" href="#settings"><GearSix weight="fill" /><span>(WIP)</span></a>
</div>
<slot />
