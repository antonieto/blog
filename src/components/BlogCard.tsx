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
		<div className="bg-theme-bg_statusline-3 hover:bg-theme-bg_visual-yellow p-4 rounded-md hover:shadow-md hover:cursor-pointer">
			<h3 className="text-theme-red font-bold text-lg">{title}</h3>
			<span className="text-sm text-theme-grey-1">{date}</span>
			<p>{summary}</p>
		</div>
	)
};

export default BlogCard;
