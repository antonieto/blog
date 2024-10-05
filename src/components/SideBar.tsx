import {getCollection} from "astro:content";

const blogs = await getCollection('blog');

const SideBar = () => {
	return (
		<nav>
			<p>this comes from sidebar btw</p>
			{blogs.map(b => (
				<a href={`/blogs/${b.slug}`}>{b.slug}</a>
			))}
		</nav>
	);
};

export default SideBar;
