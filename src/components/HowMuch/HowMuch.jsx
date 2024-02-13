import Wrapper from "../UI/Wrapper"
import Heading from "../UI/Heading"

import "./HowMuch.scss"
export default function HowMuch() {
	return (
		<section className='how-much center-section' id='how-much'>
			<Wrapper>
				<Heading className='heading' content='How much I love you'></Heading>
				<p className='how-much__text'>
					My love for <strong>Romavail</strong> knows no bounds. She brings
					sunshine to my darkest days and turns ordinary moments into
					extraordinary memories. With her, every day feels like a celebration
					of love. I am grateful for the joy she brings to my life and cherish
					the beautiful connection we share.
				</p>
			</Wrapper>
		</section>
	)
}
