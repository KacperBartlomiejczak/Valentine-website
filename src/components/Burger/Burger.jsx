import "./Burger.scss"
export default function Burger({onClick, className}) {
	return (
		<button onClick={onClick} className={className} type='button'>
			<span className='hamburger-box'>
				<span className='hamburger-inner'></span>
			</span>
		</button>
	)
}
