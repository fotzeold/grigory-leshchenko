import "./hero.scss"

const Hero = () => {

	return (
		<section className="hero">
			<div className="container">
				<div className="hero__wrapper row">
					<h1>ГРИГОРІЙ ЛЕЩЕНКО</h1>
					<span>письменник</span>
					<p>Своїми книгами борюсь з корупцією: пишу детективні та пригодницькі мелодрами  про те, до чого може привести видимість боротьби керівництва України з розгулом  корупції в нашій ледь не найбільш корумпованій країні Європи.</p>
					<a className="link" href="">Читати більше</a>
				</div>
			</div>
		</section>
	)
}

export default Hero