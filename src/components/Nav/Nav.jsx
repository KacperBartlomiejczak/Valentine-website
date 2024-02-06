import Burger from "../Burger/Burger"
import Wrapper from "../UI/Wrapper"
import { useState } from "react"

import "./Nav.scss"

export default function Nav() {
	const [isClicked, setIsClicked] = useState(false)
	const handleClick = () => {
		setIsClicked(!isClicked)
	}
	return (
		<nav className='nav'>
			<Wrapper>
				<h2>
					<a href='#'>BMA</a>
				</h2>
				<ul className={isClicked ? "nav__list is-active" : "nav__list"}>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Why I love</a>
					</li>
					<li>
						<a href='#'>How much</a>
					</li>
				</ul>
				<Burger
					className={
						isClicked
							? "hamburger hamburger--spring is-active"
							: "hamburger hamburger--spring"
					}
					onClick={handleClick}
				></Burger>
			</Wrapper>
		</nav>
	)
}
