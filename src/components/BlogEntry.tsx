import type {FC, ReactNode} from "react";
import Prose from "./Prose";


const BlogEntry: FC<{children: ReactNode}> = ({children}) => {
	return (
		<article className="flex justify-center w-full">
			<Prose
			>
				{children}
			</Prose>
		</article>

	);
};

export default BlogEntry;
