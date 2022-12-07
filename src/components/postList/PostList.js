import post1 from "../../img/jpg/post1.jpg"
import { BsDot } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "../postList/postList.scss";
const PostList = () => {
	return (
		<div className="postlist">
			<div className="postlist-column">
				<div className="postlist-column-card">
					<div className="postlist-column-card__title">
						<img src={post1} alt="" />
					</div>
					<div className="postlist-column-card__text">
						<h2>Как писать код быстро и безболезненно?</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
							Sagittis porttitor orci auctor in at tincidunt arcu egestas.
							Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
							Egestas ornare vel volutpat.</p>

						<div className="postlist-column-card__footer">
							<div>
								<p>21.06.2020</p>
								<BsDot style={{ "color": " #C4C4C4" }} />
								<p>создание сайтов</p>
							</div>
							<div>
								<a href="#">читать</a>
							</div>
						</div>

					</div>

				</div>
				<div className="postlist-column-card">
					<div className="postlist-column-card__title">
						<img src={post1} alt="" />
					</div>
					<div className="postlist-column-card__text">
						<h2>Как писать код быстро и безболезненно?</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
							Sagittis porttitor orci auctor in at tincidunt arcu egestas.
							Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
							Egestas ornare vel volutpat.</p>

						<div className="postlist-column-card__footer">
							<div>
								<p>21.06.2020</p>
								<BsDot style={{ "color": " #C4C4C4" }} />
								<p>создание сайтов</p>
							</div>
							<div>
								<a href="#">читать</a>
							</div>
						</div>

					</div>

				</div>
				<div className="postlist-column-card">
					<div className="postlist-column-card__title">
						<img src={post1} alt="" />
					</div>
					<div className="postlist-column-card__text">
						<h2>Как писать код быстро и безболезненно?</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
							Sagittis porttitor orci auctor in at tincidunt arcu egestas.
							Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
							Egestas ornare vel volutpat.</p>

						<div className="postlist-column-card__footer">
							<div>
								<p>21.06.2020</p>
								<BsDot style={{ "color": " #C4C4C4" }} />
								<p>создание сайтов</p>
							</div>
							<div>
								<a href="#">читать</a>
							</div>
						</div>

					</div>

				</div>
			</div>
			<div className="postlist-arrows">
				<button><MdKeyboardArrowLeft style={{ "width": "60%", "height": "100%" }} /></button>
				<ul className="postlist-arrows__list">
					<button className="postlist-arrows__item">1</button>
					<button className="postlist-arrows__item active">2</button>
					<button className="postlist-arrows__item">3</button>
				</ul>
				<button><MdKeyboardArrowRight style={{ "width": "60%", "height": "100%" }} /></button>
			</div>
		</div>

	)
}
export default PostList;