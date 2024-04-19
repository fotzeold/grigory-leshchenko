import Hero from "../Hero/Hero";
import Books from "../Books/Books";
import Advertising from "../Advertising/Advertising";

const Home = ({ books }) => {

	return (
		<>
			<Hero />
			<Books books={books} />
			<Advertising />
		</>
	)
}

export default Home