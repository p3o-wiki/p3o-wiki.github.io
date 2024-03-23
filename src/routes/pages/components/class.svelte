<script lang="ts">
	export let data: {
		name: string
		mask: string
		description: string
		skill_name: string
		skill_description: string[]
	}[]

	function clamp(n: number, min: number, max: number) {
		return Math.min(Math.max(n, min), max)
	}

	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft'
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight'

	import { onDestroy, onMount } from 'svelte'
	import { writable } from 'svelte/store'

	let current = writable<number | null>(null)
	let classNode: Node

	onMount(() => {
		if ((classNode as HTMLElement).checkVisibility()) {
			$current = Math.floor(data.length / 2)
		}
	})

	onDestroy(
		current.subscribe((value) => {
			if (value != null) {
				const clicked = document.getElementById(`class-${data[value].name}`) as HTMLElement
				const parent = clicked.parentElement
				if (parent) {
					parent.scrollLeft = clicked.offsetLeft - 128
				}
				;(document.getElementById(`info-${data[value].name}`) as HTMLInputElement).checked = true
			}
		})
	)
</script>

<div id="class-container" bind:this={classNode}>
	<div id="class-view">
		{#each data as datum, i}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<label
				id="class-{datum.name}"
				for="info-{datum.name}"
				class="class-single"
				data-selected={i == $current}
				on:click={() => ($current = i)}
			>
				<img class="class-mask" width="128" src="/masks/{datum.mask}.png" alt="Hero mask" />
				<span>{datum.name}</span>
			</label>
		{/each}
	</div>
</div>

{#if $current != null}
	<section id="class-controls" class="flex-row">
		<span
			on:click={() => {
				if ($current != null) {
					$current = clamp($current - 1, 0, data.length - 1)
				}
			}}
			aria-hidden
		>
			<ArrowLeft width={24} height={24} class="icon hover-invert" weight="bold" /></span
		>
		<span
			on:click={() => {
				if ($current != null) {
					$current = clamp($current + 1, 0, data.length - 1)
				}
			}}
			aria-hidden
		>
			<ArrowRight width={24} height={24} class="icon hover-invert" weight="bold" />
		</span>
	</section>
{/if}

{#each data as datum}
	<div class="w-full">
		<input id="info-{datum.name}" type="radio" name="class-info" class="none" />
		<div class="toggled-content w-full">
			<div class="info-container">
				<section class="class-container">
					<p class="class-title">{datum.name}</p>
					<p class="class-description">{datum.description}</p>
				</section>
				<section class="skill-container">
					<p class="skill-title">{datum.skill_name}</p>
					<div class="skill-description">
						{#each datum.skill_description as desc}
							<p>{desc}</p>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</div>
{/each}

<style>
	#class-container {
		width: 100%;
		overflow: scroll;
	}

	#class-controls {
		width: fit-content;
		margin-inline: auto;
		gap: 12px;
		padding: 8px;
	}

	#class-view {
		width: fit-content;
		margin-inline: auto;
		padding: 32px;
		height: max-content;
		display: flex;
		align-items: center;
		overflow-x: scroll;

		scroll-behavior: smooth;
		overscroll-behavior: none;
	}

	.class-mask {
		filter: drop-shadow(0px 4px 4px #000000b0);
	}

	.class-single {
		cursor: pointer;
		width: 96px;
		height: 96px;
		margin: 32px;
		padding: 0;
		box-shadow: 0 0 0 6px #00000040;
		border: 24px solid #7ba600;
		background-color: #9cd721;

		border-radius: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		transition: 0.15s ease-in-out;
		transition-property: all;
	}

	.class-single[data-selected='true'] {
		scale: 125%;
		box-shadow: 0 0 0 12px #fff78c;
		border-color: #f7cb31;
		background-color: #ffe384;
	}

	.info-container {
		display: flex;
	}

	.class-container {
		flex: 3;
	}

	.skill-container {
		flex: 5;
	}

	.class-title {
		text-align: center;
	}

	.skill-title {
		color: red;
	}

	.skill-title,
	.class-title {
		font-size: 28px;
		border-bottom: 1px solid black;
	}
</style>
