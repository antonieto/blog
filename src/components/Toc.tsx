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

const depthTwMap = {
	1: 'font-bold text-orange',
	2: 'font-bold text-aqua',
	3: 'font-bold text-green'
} as Record<number, string>;

const getDepthTw = (depth: number, index: number, highlightIndex: number) => {
	if (index !== highlightIndex) return 'text-fg';
	return depthTwMap[depth] ?? 'text-fg';
}

const Toc: FC<Props> = ({headings, highlightIndex, onHeadingClick}) => {

	return (
		<nav className="p-4 bg-surface rounded-lg min-w-40 max-w-60 shadow-xl relative">
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
							className={"block py-1 px-2 truncate " + getDepthTw(heading.depth, i, highlightIndex) + ' hover:text-yellow'}
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
