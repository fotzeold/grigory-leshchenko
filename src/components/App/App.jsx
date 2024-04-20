import Header from "../Header/Header";
import Home from "../Home/Home";
import Letters from "../Letters/Letters";
import Letter from "../Letter/Letter";
import AdditionalBlock from "../AdditionalBlock/AdditionalBlock";
import Footer from "../Footer/Footer";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import { getInfo } from "../../services/api"

const App = () => {
	const [books, setBooks] = useState([])
	const [blog, setBlog] = useState([])
	const [message, setMessage] = useState([])

	useEffect(() => {
		setBooks(getInfo("books"))
		setBlog(getInfo("blog"))
		setMessage(getInfo("message"))
	}, [])

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home books={books} />} />
					<Route path="/letters" element={<Letters message={message} />} />
					<Route path="/letters/:letterId" element={<Letter message={message} />} />
					{/* <Route path="/" element={<Home books={books} />} />
					<Route path="/" element={<Home books={books} />} /> */}
				</Routes>
				<AdditionalBlock info={{ blog, books }} />
			</main>
			<Footer />
		</>
	);
}

export default App;
