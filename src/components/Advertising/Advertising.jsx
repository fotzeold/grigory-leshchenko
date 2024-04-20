import "./advertising.scss"
import { blogHomeImg } from "../../services/image"
import { Link } from "react-router-dom"

const Advertising = () => {

	return (
		<section className="advertising">
			<div className="container">
				<div className="row">
					<div className="advertising__part">
						<img src={blogHomeImg} alt="" />
					</div>

					<div className="advertising__part">
						<h2>Мій блог</h2>
						<p>Заходьте на сторінку мого блогу, де я публікую цікаві статті про проблеми корупції, зловживань посадовців та інші актуальні теми...</p>
						<p>Залишайте свої коментарі, роздуми та пропозиції до статей. Буду вдячний Вам за поради як можна знищити корупційного монстра в Україні. Опишіть Ваші приклади боротьби за справедливість. </p>
						<p>Разом ми подолаємо корупцію та зробимо нашу країну кращою для прийдешніх поколінь.</p>
						<Link to="/blogs" className="link btn">Перейти на блог</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advertising