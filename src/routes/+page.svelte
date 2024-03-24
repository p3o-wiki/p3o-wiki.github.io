<script lang="ts">
	export let data

	import banner from '$lib/banner.png'
</script>

<article class="flex-col">
	<h1>Welcome to Patapon 3 Overhaul Wiki!</h1>
	<img src={banner} alt="banner" width="100" />
	<p>Here you can find updated information about the overhaul mod for Patapon 3.</p>
	<p>Work in progress - it can lack information.</p>

	<div id="cards">
		<section class="card">
			<h2>Categories</h2>
			<hr />
			<div id="categories">
				{#each data.categories as [category, pages]}
					<section class="card">
						<h3>{category}</h3>
						<ul>
							{#each pages as page}
								<li>
									<a href={page.path}>
										{page.metadata.title}
									</a>
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			</div>
		</section>

		<section id="article-list" class="card">
			<h2>Articles List</h2>
			<hr />

			<ul>
				{#each data.pages as page}
					<li>
						<a href={page.path}>
							{page.metadata.title}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</article>

<style>
	h1,
	h2,
	h3 {
		margin-bottom: 0;
	}

	hr {
		width: 95%;
	}

	#cards {
		flex-wrap: wrap;
		display: flex;
		justify-content: center;
	}

	#categories {
		overflow: scroll;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	#article-list {
		max-height: 300px;
		width: fit-content;
		overflow: hidden;
	}

	#article-list ul {
		overflow-y: scroll;
		margin: 4px 6px;
	}
</style>
