import {useState, type FC, type ReactNode} from "react";
import Prose from "./Prose";
import Toc, {type ContentEntry} from "./Toc";

const BlogEntry: FC<{children: ReactNode, headings: ContentEntry[]}> = ({children, headings}) => {
	const [percentage, setPercentage] = useState(0);
	const [clickedHeading, setClickedHeading] = useState<number | null>(null);
	const handleHeadingClick = (heading: ContentEntry) => {
		setClickedHeading(headings.findIndex(h => h.slug === heading.slug));
	};

	const getHiglightIndex = () => {
		if (!!clickedHeading) {
			return clickedHeading;
		}

		// Nearest integer
		return Math.max(
			0,
			Math.min(
				headings.length - 1,
				Math.round(
					percentage * headings.length
				) - 1,
			));
	};

	return (
		<div
			onWheel={() => {
				setClickedHeading(null);
			}}
			onScroll={(e) => {
				const totalHeight = e.currentTarget.scrollHeight - e.currentTarget.offsetHeight;
				const percentage = e.currentTarget.scrollTop / totalHeight;
				setPercentage(percentage);
			}}
			className={"overflow-y-auto px-4 max-w-[60rem]" +
				" [&::-webkit-scrollbar]:w-2" +
				" [&::-webkit-scrollbar-track]:rounded-full" +
				" [&::-webkit-scrollbar-track]:bg-gruvbox-bg-dim" +
				" [&::-webkit-scrollbar-thumb]:rounded-full" +
				" [&::-webkit-scrollbar-thumb]:bg-gruvbox-grey-2" +
				" "}

		>
			<article className="flex justify-center w-full">
				<Prose
				>
					{children}
				</Prose>
				<div className="hidden xl:block fixed top-10 right-10">
					<Toc
						headings={headings}
						highlightIndex={getHiglightIndex()}
						onHeadingClick={handleHeadingClick}
					/>
				</div>
			</article>
		</div>


	);
};

export default BlogEntry;
