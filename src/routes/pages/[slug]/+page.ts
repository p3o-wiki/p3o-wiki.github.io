import type { ComponentType } from 'svelte'

export async function load({ fetch, params }) {
	const pages = (await (await fetch('/api/pages')).json()) as {
		metadata: PageMeta
		path: string
	}[]

	const post = await import(`../${params.slug}.md`)

	const content = post.default as ComponentType
	const metadata = post.metadata as PageMeta

	const next = pages.find((p) => p.metadata.ord > metadata.ord)
	const prev = pages.findLast((p) => p.metadata.ord < metadata.ord)

	return {
		next,
		prev,
		content,
		...metadata
	}
}
