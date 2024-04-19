import "./advertising.scss"
import { blogHomeImg } from "../../services/image"

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
						<a href="" className="link btn">Перейти на блог</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advertising