import type {z} from "astro:content"
import {BlogSchema} from '../content/config';
import type {FC} from "react";

type Blog = z.infer<typeof BlogSchema>;

interface Props extends Blog {}

const BlogCard: FC<Props> = ({
	title,
	date,
	summary,
}) => {
	return (
		<div className="bg-gruvbox-bg_statusline-3 hover:bg-gruvbox-bg_visual-yellow p-4 rounded-md hover:shadow-md hover:cursor-pointer">
			<h3 className="text-gruvbox-red font-bold text-lg">{title}</h3>
			<span className="text-sm text-gruvbox-grey-1">{date}</span>
			<p>{summary}</p>
		</div>
	)
};

export default BlogCard;
