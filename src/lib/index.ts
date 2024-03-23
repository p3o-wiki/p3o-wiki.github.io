// place files you want to import through the `$lib` alias in this folder.
export const fetchMarkdownPages = async () => {
	const allPagesFiles = import.meta.glob('/src/routes/pages/*.md')
	const iterablePagesFiles = Object.entries(allPagesFiles)

	const allPages = await Promise.all(
		iterablePagesFiles.map(async ([path, resolver]) => {
			const page = (await resolver()) as { metadata: PageMeta }
			const postPath = path.slice(11, -3)

			return {
				metadata: page.metadata,
				path: postPath
			}
		})
	)

	const sortedPages = allPages.sort((a, b) => {
		return a.metadata.ord - b.metadata.ord
	})

	return sortedPages
}
