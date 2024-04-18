import { logo } from "../../services/image";
import "./header.scss"
import { useState } from "react";

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
						<a className="link" href="">Головна</a>
						<a className="link" href="">Мої листи</a>
						<a className="link" href="">Блог</a>
						<a className="link" href="">Контакти</a>
					</nav>
					<div onClick={() => setActive(prev => !prev)} className={`burger row ${active && "active"}`}>
						<figure></figure>
						<figure></figure>
						<figure></figure>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header