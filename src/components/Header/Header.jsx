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
						<Link className="link" onClick={() => setActive(false)} to="/"><img src={logo} alt="" /></Link>
					</div>
					<nav className={`row ${active && "active"}`}>
						<Link className="link" onClick={() => setActive(false)} to="/">Головна</Link>
						<Link className="link" onClick={() => setActive(false)} to="/letters">Мої листи</Link>
						<Link className="link" onClick={() => setActive(false)} to="/blogs">Блог</Link>
						<Link className="link" onClick={() => setActive(false)} to="/contacts">Контакти</Link>
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

