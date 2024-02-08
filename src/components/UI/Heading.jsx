import "./Heading.scss"

export default function Header({ content, className }) {
	return <h2 className={className}>{content}</h2>
}
