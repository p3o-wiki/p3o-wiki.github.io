import { fetchMarkdownPages } from '$lib'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const pages = await fetchMarkdownPages()

	return json(pages)
}
