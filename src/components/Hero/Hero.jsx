import "./hero.scss"
import { Link } from "react-router-dom"

const Hero = () => {

	return (
		<section className="hero">
			<div className="container">
				<div className="hero__wrapper row">
					<h1>Григорій Лещенко</h1>
					<span>письменник</span>
					<p><span>С</span>ВОЇМИ КНИГАМИ БОРОВСЯ З КОРУПЦІЄЮ: ЩЕ ПЕРЕД ВІЙНОЮ ЗА ЧАСІВ ПРАВЛІННЯ ПРЕЗИДЕНТА <span>П</span>ЕТРО <span>П</span>ОРОШЕНКА НАПИСАВ КІЛЬКА  ДЕТЕКТИВІВ ТА ПРИГОДНИЦЬКИХ МЕЛОДРАМ. <br /> <span>Н</span>А ЖАЛЬ, НИНІ, ПІСЛЯ ПОЧАТКУ ПОВНОМАСШТАБНОГО НАПАДУ РОСІЙСЬКОЇ ФЕДЕРАЦІЇ НА УКРАЇНУ,  ЩЕ НЕ НАПИСАВ НІЧОГО, В ОСНОВНОМУ, ЧЕРЕЗ СІМЕЙНІ ОБСТАВИНИ. АЛЕ Є ПЕВНІ ЗАДУМКИ...
						<br /><span>Я</span>К КОРУПЦІОНЕРИ ПЕРЕД ВІЙНОЮ  В МОЇХ КНИГАХ ОТРИМАЛИ ПО ПОВНІЙ, ТАК, СПОДІВАЮТЬ, І ПРОКЛЯТІ РАШИСТИ В МОЄМУ НОВОМУ РОМАНІ МАТИМУТЬ НЕ МЕНШЕ. ХАЙ БЕРЕЖЕ НАС <span>Г</span>ОСПОДЬ <span>Б</span>ОГ, <span>ЗСУ</span> І ЦИВІЛІЗОВАНИЙ СВІТ! <br /> <span>М</span>И ПЕРЕМОЖЕМО!<br /> <span>С</span>ЛАВА УКРАЇНІ!</p>
					<Link className="link btn" to="/blogs">Читати більше</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero