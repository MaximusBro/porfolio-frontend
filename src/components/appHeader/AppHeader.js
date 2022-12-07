
import "../appHeader/appHeader.scss";
import { GiHamburgerMenu } from "react-icons/gi"
const AppHeader = ({ setBurger, burger }) => {
	return (
		<header className="header">
			<div className="header-burger">
				<GiHamburgerMenu onClick={() => setBurger(!burger)} />
			</div>
			<div className="header-nav">
				<nav>
					<HeaderNav />
				</nav>
			</div>
			<div className="header-search">
				<a href="#">PROFILE</a>
				<input type="text" placeholder="Поиск по блогу" />
			</div>
		</header>
	)
}
const HeaderNav = () => {
	return (
		<ul className="header-nav__list">
			<li className="header-nav__item">
				<a href="#">Main</a>
			</li>
			<li className="header-nav__item">
				<a href="#"> TOPICS <span></span></a>
				<ul className="header-nav__item-sublist">
					<li className="header-nav__item-sublist__item">Создание сайтов</li>
					<li className="header-nav__item-sublist__item">Интернет-маркетинг</li>
					<li className="header-nav__item-sublist__item">Продвижение видео</li>
				</ul>
			</li>
			<li className="header-nav__item">
				<a href="#">ABOUT ME</a>
			</li>
			<li className="header-nav__item">
				<a href="#">AD</a>
			</li>

		</ul>
	)
}
export default AppHeader;