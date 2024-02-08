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
		<nav className='nav center-section'>
			<Wrapper>
				<h2>
					<a href='#'>BMA</a>
				</h2>
				<ul className={isClicked ? "nav__list is-active" : "nav__list"}>
					<li>
						<a href='#' onClick={handleClick}>
							Home
						</a>
					</li>
					<li>
						<a href='#why' onClick={handleClick}>
							Why I love
						</a>
					</li>
					<li>
						<a href='#our-story' onClick={handleClick}>
							Our story
						</a>
					</li>
					<li>
						<a href='#' onClick={handleClick}>
							How much
						</a>
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
