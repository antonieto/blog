import {type FC} from "react"

interface Props {
	children: React.ReactNode
}

const Prose: FC<Props> = ({children}) => {
	return (
		<div
			className="prose prose-li:text-theme-fg-1 max-w-none prose-h1:text-theme-orange prose-p:text--fg-0 prose-h2:text-theme-blue prose-h3:text-theme-fg-1 prose-li:marker:text-theme-fg-1 prose-hr:border-theme-bg-5"
		>
			{children}
		</div>
	)
};

export default Prose;
