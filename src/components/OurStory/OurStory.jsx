import Heading from "../UI/Heading"
import Wrapper from "../UI/Wrapper"
import Dates from "./Dates"

import "./OurStory.scss"
export default function OurStory() {
	return (
		<section className='our-story center-section' id='our-story'>
			<Wrapper>
				<Heading content='Our story' className='heading'></Heading>
				<div className='our-story__content'>
					<Dates
						img='src/assets/Bella1.jpg'
						dateDescription='Our story just started'
						date='23.07.2023'
					></Dates>
					<Dates
						img='src/assets/Bella2.jpg'
						dateDescription='You re goofy and I love it'
						date='23.08.2023'
					></Dates>
					<Dates
						img='src/assets/Bella3.jpg'
						dateDescription='You re so beautiful'
						date='23.09.2023'
					></Dates>
					<Dates
						img='src/assets/Bella4.jpg'
						dateDescription='Can we kiss'
						date='23.10.2023'
					></Dates>
					<Dates
						img='src/assets/Kacper1.jpg'
						dateDescription='I love you <3'
						date='23.11.2023'
					></Dates>
					<Dates
						img='src/assets/Bella7.jpg'
						dateDescription='I love making you smile'
						date='23.12.2023'
					></Dates>
					<Dates
						img='src/assets/Bella6.jpg'
						dateDescription='Started being so serious but I love it.'
						date='23.01.2024'
					></Dates>
					<ion-icon name='chevron-down-outline'></ion-icon>
				</div>
			</Wrapper>
		</section>
	)
}
