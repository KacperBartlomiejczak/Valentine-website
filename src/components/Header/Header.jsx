import "./Header.scss"
import Wrapper from "../UI/Wrapper"
export default function Header() {
	return (
		<header className='header center-section'>
			<Wrapper>
				<div className='container'>
					<h1>Bella is my</h1>
					<ul className='header-text'>
						<li>
							<span>love</span>
						</li>
						<li>
							<span>wife</span>
						</li>
						<li>
							<span>fiance</span>
						</li>
						<li>
							<span>the best gf</span>
						</li>
					</ul>
				</div>
			</Wrapper>
		</header>
	)
}
