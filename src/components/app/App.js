import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import AsideInfo from "../asideInfo/AsideInfo";
import Modal from "../modal/Modal";
import { MainPage, MyWorksPage } from "../pages/index";
import Profile from "../profile/Profile";
function App() {
	const [burger, setBurger] = useState(false);
	return (
		<Router>
			<div className="App">
				<AsideInfo burger={burger} />
				<AppHeader setBurger={setBurger} burger={burger} />

				<div className="wrapper">
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
						<Route path="/works" element={<MyWorksPage />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
					</Routes>
				</div>

				<Modal />
			</div>
		</Router>


	);
}

export default App;
