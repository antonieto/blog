import {type FC} from "react"

interface Props {
	children: React.ReactNode
}

const Prose: FC<Props> = ({children}) => {
	return (
		<div
			className="text-lg prose prose-li:text-fg max-w-none prose-h1:text-orange prose-p:text-fg prose-h2:text-blue prose-h3:text-fg prose-li:marker:text-fg prose-hr:border-border prose-a:text-accent prose-strong:text-fg"
		>
			{children}
		</div>
	)
};

export default Prose;
