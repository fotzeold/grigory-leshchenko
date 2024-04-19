import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Books from "../Books/Books";
import Advertising from "../Advertising/Advertising";
import AdditionalBlock from "../AdditionalBlock/AdditionalBlock";

import { useState, useEffect } from "react"
import { getInfo } from "../../services/api"

const App = () => {
	const [books, setBooks] = useState([])
	const [blog, setBlog] = useState([])

	useEffect(() => {
		setBooks(getInfo("books"))
		setBlog(getInfo("blog"))
	}, [])

	return (
		<>
			<Header />
			<main>
				<Hero />
				<Books books={books} />
				<Advertising />
				<AdditionalBlock info={{ blog, books }} />
			</main>
		</>
	);
}

export default App;
