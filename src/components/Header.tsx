
const Header = () => {
	return (
		<header className="m-4">
			<h1 className="text-5xl font-bold text-gruvbox-aqua">
				Antonio Chaires

			</h1>
			<nav>
				<ul className="flex justify-center gap-6 underline hover:cursor-pointer ">
					<li>
						<a>
							Posts
						</a>
					</li>
					<li>
						<a>
							Me
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/antonioch-mon/">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/antonieto">
							Github
						</a>
					</li>
				</ul>
			</nav>
		</header>

	)
};

export default Header;
