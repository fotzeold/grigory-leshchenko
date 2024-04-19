import { logo } from "../../services/image";
import "./header.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [active, setActive] = useState(false)

	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="logo">
						<a className="link" href=""><img src={logo} alt="" /></a>
					</div>
					<nav className={`row ${active && "active"}`}>
						<Link className="link" to="/">Головна</Link>
						<Link className="link" to="/letters">Мої листи</Link>
						<Link className="link" to="/blog">Блог</Link>
						<Link className="link" to="/contacts">Контакти</Link>
					</nav>
					<div onClick={() => setActive(prev => !prev)} className={`burger row ${active && "active"}`}>
						<figure></figure>
						<figure></figure>
						<figure></figure>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

