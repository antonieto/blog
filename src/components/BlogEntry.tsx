import type {FC, ReactNode} from "react";


const BlogEntry: FC<{children: ReactNode}> = ({children}) => {
	return (
		<article className="flex justify-center w-full">
			<div
				className="prose prose-li:text-gruvbox-fg-1 max-w-none prose-h1:text-gruvbox-orange prose-p:text-gruvbox-fg-0 prose-h2:text-gruvbox-blue prose-h3:text-gruvbox-fg-1 prose-li:marker:text-gruvbox-fg-1"
			>
				{children}
			</div>
		</article>

	);
};

export default BlogEntry;
