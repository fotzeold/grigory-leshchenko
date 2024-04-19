import "./useful-information.scss"

const UsefulInformation = ({ blog }) => {

	return (
		<div className="additional__inf additional__part">
			<h2 className="additional__part-title">Корисна інформація</h2>
			<div className="additional__part-content">
				<ul>
					{blog.length > 0 && blog.map((el) => <li key={el.id}><a href="" className="link">{el.title}</a></li>)}
					<li><a href="" className="link">Блог</a></li>
					<li><a href="" className="link">Контакти</a></li>
					<li><a href="" className="link">Мої листи</a></li>
				</ul>
			</div>
		</div>
	)
}

export default UsefulInformation