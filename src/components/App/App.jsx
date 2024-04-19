import Header from "../Header/Header";
import Home from "../Home/Home";
import AdditionalBlock from "../AdditionalBlock/AdditionalBlock";
import Footer from "../Footer/Footer";

import { Routes, Route } from "react-router-dom";
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
				<Routes>
					<Route path="/" element={<Home books={books} />} />
					{/* <Route path="/" element={<Home books={books} />} />
					<Route path="/" element={<Home books={books} />} />
					<Route path="/" element={<Home books={books} />} /> */}
				</Routes>
				<AdditionalBlock info={{ blog, books }} />
			</main>
			<Footer />
		</>
	);
}

export default App;
