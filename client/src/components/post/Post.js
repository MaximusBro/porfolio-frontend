import { Link } from "react-router-dom";
import { BsDot, BsShare } from "react-icons/bs";
import "./post.scss"
import postImg from "../../img/jpg/post1.jpg"
const Post = () => {
	return (
		<section className="post">
			<div className="wrapper">
				<div className="post-card">
					<div className="post-card__wrapper">
						<div className="post-card__header">
							<div className="post-card__header__btns">
								<Link to="/porfolio-frontend"><p>вернуться назад</p></Link>
								<button>поделиться <BsShare /></button>
							</div>
							<div className="post-card__header__title">
								<div>
									<h2>Как создавать сайты легко</h2>
								</div>
								<div>
									<p>21.06.2020</p>
									<BsDot style={{ "color": " #C4C4C4" }} />
									<p>создание сайтов</p>
								</div>

							</div>
						</div>

						<div className="post-card__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.<br /><br />

								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
							<img src={postImg} alt="" />
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>

						</div>
						<div className="post-card-recommendation">
							<h3>Интересно почитать</h3>
							<div className="post-card-recommendation__column">
								<div className="post-card-recommendation__card">
									<h4>Как я сходил на FrontEnd Conf 2021</h4>
									<p>21.06.2020</p>
								</div>
								<div className="post-card-recommendation__card">
									<h4>Как я сходил на FrontEnd Conf 2021</h4>
									<p>21.06.2020</p>
								</div>
								<div className="post-card-recommendation__card">
									<h4>Как я сходил на FrontEnd Conf 2021</h4>
									<p>21.06.2020</p>
								</div>
								<div className="post-card-recommendation__card">
									<h4>Как я сходил на FrontEnd Conf 2021</h4>
									<p>21.06.2020</p>
								</div>
							</div>
						</div>
						<div className="post-card-commentary">
							<div className="post-card-commentary__form">
								<div className="post-card-commentary__form__title">
									<h3>
										Обсуждение
									</h3>
								</div>
								<form action="">
									<input type="text" name="" id="" placeholder="Текст комментария" />
									<button type="submit">Отправить</button>
								</form>
							</div>
							<div className="post-card-commentary__column">
								<div className="post-card-commentary__comment">
									<div className="post-card-commentary__comment__header">
										<img src={postImg} alt="" />
										<div>
											<h4>Дмитрий Валак</h4>
											<p>1 неделю назад</p>
										</div>
									</div>
									<div className="post-card-commentary__comment__text">
										<p>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
									</div>
									<button>ответить</button>
									<div className="post-card-commentary__subcomment">
										<div className="post-card-commentary__comment__header">
											<img src={postImg} alt="" />
											<div>
												<h4>Дмитрий Валак2</h4>
												<p>12 неделю назад</p>
											</div>
										</div>
										<div className="post-card-commentary__comment__text">
											<p>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
										</div>
										<button>ответить</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Post