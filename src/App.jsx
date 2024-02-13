import Nav from "./components/Nav/Nav"
import Header from "./components/Header/Header"
import WhyILoveYou from "./components/WhyILoveYou/WhyILoveYou"
import HowMuch from "./components/HowMuch/HowMuch"

import OurStory from "./components/OurStory/OurStory"
function App() {
	return (
		<main className='content'>
			<Nav></Nav>
			<Header></Header>
			<WhyILoveYou></WhyILoveYou>
			<OurStory></OurStory>
			<HowMuch></HowMuch>
		</main>
	)
}

export default App
