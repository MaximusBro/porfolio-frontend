import "../pages/myWorksPage.scss";
import Work1 from "../../img/jpg/work1.jpg";
import { motion } from "framer-motion";
const MyWorksPage = () => {
	return (
		<motion.section className="works"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }
			}
			exit={{ opacity: 0 }}>
			<div className="wrapper">
				<div className="works__title">
					<h2>My works</h2>
				</div>
				<div className="works-column">
					<div className="works-column-card">
						<div className="works-column-card__picture">
							<img src={Work1} alt="" />
						</div>
						<div className="works-column-card__info">
							<div className="works-column-card__text">
								<h2>altermono.com</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
									Egestas ornare vel volutpat.</p>
								<div className="works-column-card__list">
									<ul>
										<li>дизайн</li>
										<li>создание сайта</li>
										<li>SMM </li>
									</ul>
								</div>

							</div>
							<div className="works-column-card__link">
								<a href="google.com">Перейти на сайт</a>
							</div>

						</div>

					</div>
					<div className="works-column-card">
						<div className="works-column-card__picture">
							<img src={Work1} alt="" />
						</div>
						<div className="works-column-card__info">
							<div className="works-column-card__text">
								<h2>altermono.com</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
									Egestas ornare vel volutpat.</p>
								<div className="works-column-card__list">
									<ul>
										<li>дизайн</li>
										<li>создание сайта</li>
										<li>SMM </li>
									</ul>
								</div>

							</div>
							<div className="works-column-card__link">
								<a href="google.com">Перейти на сайт</a>
							</div>

						</div>

					</div>
				</div>
			</div>
		</motion.section>
	)
}
export default MyWorksPage;