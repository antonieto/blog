import {getCollection} from "astro:content";

const blogs = await getCollection('blog');

const SideBar = () => {

	return (
		<>
			<div className="hidden xl:block absolute left-0 top-0 h-full  min-w-max p-6">

				<aside
					className="bg-theme-bg_statusline-3 shadow-lg w-full max-w-[20rem] h-full rounded-md"
				>
					<div className="px-2 py-4">
						<p className="font-bold">
							José Antonio Chaires Monroy
						</p>
						<p className="text-sm">Production Engineer @ Meta</p>
						<p className="text-sm">New York City, NY</p>
						<a className="text-sm underline" href="mailto:antonioch.mon@gmail.com">
							antonioch.mon@gmail.com
						</a>
					</div>

					<div className="w-full border-b-[1px] border-theme-grey-0" />
					<ul className="flex py-4 px-12 flex-col gap-4">
						{blogs.map(b => (
							<li className="underline text-theme-purple">
								<a href={`/blogs/${b.slug}`}>{b.data.title}</a>
							</li>
						))}
					</ul>

				</aside>
			</div >
		</>

	);
};

export default SideBar;
