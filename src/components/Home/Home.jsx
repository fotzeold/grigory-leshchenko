import Hero from "../Hero/Hero";
import Books from "../Books/Books";
import Advertising from "../Advertising/Advertising";
import Photo from "../Photo/Photo";

const Home = ({ books }) => {

	return (
		<>
			<Hero />
			<Photo />
			<Books books={books} />
			<Advertising />
		</>
	)
}

export default Home