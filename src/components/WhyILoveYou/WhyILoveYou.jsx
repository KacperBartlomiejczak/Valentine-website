import Wrapper from "../UI/Wrapper"
import Heading from "../UI/Heading"

import "./WhyILoveYou.scss"
export default function WhyILoveYou() {
	return (
		<section id='why' className='why center-section'>
			<Wrapper>
				<Heading
					content='Why I love you'
					className='heading color-black'
				></Heading>
				<p>
					I love my girlfriend because she brings so much joy and positivity
					into my life. Her smile has the power to brighten even the darkest
					days, and her kindness and compassion inspire me to be a better
					person. She understands me in a way that no one else does, and her
					unwavering support makes every challenge seem more manageable. Her
					laughter is like music to my ears, and the way she cares for others
					with such genuine warmth is truly admirable. In her presence, I feel a
					deep sense of comfort and happiness that I've never experienced
					before. Loving her is easy because she is not just my girlfriend, but
					my best friend and the most incredible person I know."
				</p>
			</Wrapper>
		</section>
	)
}
