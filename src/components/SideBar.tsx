import {getCollection} from "astro:content";
import {useState} from "react";
import {motion} from "framer-motion";
import Hamb from "./Hamb";

const blogs = await getCollection('blog');

const SideBar = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<nav className="md:absolute left-0 top-0 h-full  min-w-max p-6">
				<button
					className="hover:cursor-pointer hover:bg-gruvbox-bg_statusline-3 w-full flex justify-center mb-2 rounded-md *:fill-blue-400"
					type="button"
					onClick={() => setVisible(!visible)}>
					<Hamb className="text-red-500" />
				</button>
				<motion.div
					initial={{x: '-100%'}}
					animate={{x: visible ? 0 : '-200%'}}
					transition={{duration: 0.3, ease: 'easeInOut'}}
					className="bg-gruvbox-bg_statusline-3 shadow-lg w-full h-full rounded-md"
				>
					<ul className="flex py-4 px-12 flex-col gap-4">
						{blogs.map(b => (
							<li className="underline text-gruvbox-purple">
								<a href={`/blogs/${b.slug}`}>{b.slug}</a>
							</li>
						))}
					</ul>

				</motion.div>
			</nav >
		</>

	);
};

export default SideBar;
