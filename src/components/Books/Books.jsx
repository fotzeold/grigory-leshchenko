import "./books.scss"

import { useState, useEffect } from "react"
import { getInfo } from "../../services/api"

const Books = () => {

	const [books, setBooks] = useState([])

	useEffect(() => {
		setBooks(getInfo("books"))
	}, [])

	return (
		<section className="books">
			<div className="container">
				<h2>Мої книги</h2>
				<div className="row">
					{books.length > 0 && books.map(book => {
						return (
							<div className="books__item" key={book.id}>
								<img src={book.img} alt={book.title} />
								<h3>{book.title}</h3>
								<a href="" className="link btn">Читати</a>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)

}

export default Books