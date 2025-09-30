// Module for a table of contents

type ContentEntry = {
	depth: 1 | 2 | 3,
	slug: string,
	text: string
}

type HeadingTree = {
	slug: string,
	text: string,
	children: HeadingTree[],
}

export function buildTable(headings: ContentEntry[]): HeadingTree {
	return {
		slug: 'something',
		text: 'something',
		children: []
	}
	
}
