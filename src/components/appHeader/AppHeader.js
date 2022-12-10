import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../appHeader/appHeader.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const AppHeader = ({ setBurger, burger }) => {
	const [sublistActive, setsublistActive] = useState(false);
	const sublist = useRef();


	return (
		<header className="header">
			<div className="header-burger">
				{burger ? <RxCross1 onClick={() => setBurger(!burger)} /> : <GiHamburgerMenu onClick={() => setBurger(!burger)} />}
			</div>
			<div className="header-nav">
				<nav>
					<ul className="header-nav__list">
						<li className="header-nav__item">
							<Link to="/">Main</Link>
						</li>
						<li className="header-nav__item" ref={sublist} onClick={() => setsublistActive(!sublistActive)}>
							<a href="#" > TOPICS <span className={sublistActive ? "active" : ""}></span></a>
							<ul className={sublistActive ? "header-nav__item-sublist active" : "header-nav__item-sublist"}>
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
				</nav>
			</div>
			<div className="header-search">
				<Link to="/profile">PROFILE</Link>
				<input type="text" placeholder="Поиск по блогу" />
			</div>
		</header>
	)
}

export default AppHeader;