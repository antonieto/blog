import {type FC} from "react"

interface Props {
	headings: ContentEntry[];
	highlightIndex: number;
	onHeadingClick?: (heading: ContentEntry) => void;
}

export type ContentEntry = {
	depth: number,
	slug: string,
	text: string
}

const detphTwMap = {
	1: 'font-bold text-gruvbox-orange',
	2: 'font-bold text-gruvbox-aqua',
	3: 'font-bold text-gruvbox-green'
} as Record<number, string>;

const getDepthTw = (depth: number, index: number, highlightIndex: number) => {
	if (index !== highlightIndex) return 'text-gruvbox-fg-1';
	return detphTwMap[depth] ?? 'text-gruvbox-fg-1';
}

const Toc: FC<Props> = ({headings, highlightIndex, onHeadingClick}) => {

	return (
		<nav className="p-4 bg-gruvbox-bg_statusline-3 rounded-lg min-w-40 max-w-60 shadow-xl relative">
			<ul className="space-y-2">
				{headings.map((heading, i) =>
				(
					<li
						key={heading.slug}
						className={`
							text-xs transition-colors duration-150 ease-in-out
						  ${heading.depth === 2 ? 'ml-4' : ''}
						  ${heading.depth === 3 ? 'ml-8' : ''}
						  ${heading.depth > 3 ? 'ml-12' : ''}
						`}
					>
						<a
							onClick={() => {
								if (onHeadingClick) {
									onHeadingClick(heading);
								};
							}}
							href={`#${heading.slug}`}
							className={"block py-1 px-2 truncate " + getDepthTw(heading.depth, i, highlightIndex) + ' hover:text-gruvbox-yellow'}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
};

export default Toc;
