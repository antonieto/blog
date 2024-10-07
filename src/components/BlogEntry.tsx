import type {FC, ReactNode} from "react";


const BlogEntry: FC<{children: ReactNode}> = ({children}) => {
	return (
		<article className="flex justify-center w-full">
			<div
				className="prose prose-h1:text-gruvbox-orange p-8 min-w-[50rem] prose-p:text-gruvbox-fg-0"
			>
				{children}
			</div>
		</article>

	);
};

export default BlogEntry;
