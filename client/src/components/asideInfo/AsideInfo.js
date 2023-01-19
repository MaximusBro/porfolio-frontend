import { Link } from "react-router-dom";
import avatar from "../../img/png/avatar.png";
import backgroundAside from "../../img/jpg/backgroundAside.jpg";
import instagram from "../../img/svg/instagram.svg"
import vk from "../../img/svg/vk.svg"
import pinterest from "../../img/svg/pinterest.svg"
import "../asideInfo/asideInfo.scss";
const AsideInfo = ({ burger, modalContact, setModalContact }) => {
	return (
		<aside className={burger ? "aside active" : "aside"}>
			<div className="aside-header">
				<img src={backgroundAside} alt="" />
			</div>
			<div className="aside-main">
				<div className="wrapper">
					<div className="aside-main-intro">
						<img src={avatar} alt="" />
						<div className="aside-main-intro__logo">
							<h2>Дмитрий Валак</h2>
							<p>блог front-end разработчика</p>
						</div>

						<div className="aside-main-intro__networks">
							<a href="#"><img src={instagram} alt="" /></a>
							<a href="#"><img src={vk} alt="" /></a>
							<a href="#"><img src={pinterest} alt="" /></a>
						</div>
					</div>
					<div className="aside-main-intro__nav">
						<ul>
							<li>
								<a href="#">Topics</a>
								<ul>
									<li><a href="#">Creating sites</a></li>
									<li><a href="#">Internet marketing</a></li>
									<li><a href="#">Video</a></li>
								</ul>
							</li>
							<li>
								<Link to="/porfolio-frontend">Main</Link>
							</li>
							<li><a>About Me</a></li>
							<li>
								<a>AD</a>
							</li>
							<li>
								<Link to="/porfolio-frontend/profile">Profile</Link>
							</li>
						</ul>
					</div>
					<div className="aside-main__description">
						<p>Front-end разработчик. Практик верстки сайтов.
							Созданием сайтов занимаюсь с 2012 года.
							Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
						</p>
					</div>
					<div className="aside-main__links">
						<Link to={"/porfolio-frontend/works"}>
							<button className="button" style={{ "backgroundColor": "#ed3024" }}>Мои работы</button>
						</Link>
						<button
							className="button"
							style={{ "backgroundColor": "#3137c9" }}
							onClick={() => setModalContact(!modalContact)}
						>Write me</button>
					</div>
				</div>
			</div>
		</aside>
	)
}
export default AsideInfo;