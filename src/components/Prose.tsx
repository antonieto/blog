import {type FC} from "react"

interface Props {
	children: React.ReactNode
}

const Prose: FC<Props> = ({children}) => {
	return (
		<div
			className="prose prose-li:text-gruvbox-fg-1 max-w-none prose-h1:text-gruvbox-orange prose-p:text-gruvbox-fg-0 prose-h2:text-gruvbox-blue prose-h3:text-gruvbox-fg-1 prose-li:marker:text-gruvbox-fg-1 prose-hr:border-gruvbox-bg-5"
		>
			{children}
		</div>
	)
};

export default Prose;
