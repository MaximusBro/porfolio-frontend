import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import AsideInfo from "../asideInfo/AsideInfo";
import Modal from "../modal/Modal";
import { MainPage, MyWorksPage } from "../pages/index";
import Profile from "../profile/Profile";
function App() {
	const [burger, setBurger] = useState(false);
	const [modalContact, setModalContact] = useState(false);
	return (
		<Router>
			<div className="App">
				<AsideInfo burger={burger} modalContact={modalContact} setModalContact={setModalContact} />
				<AppHeader setBurger={setBurger} burger={burger} />

				<div className="wrapper">
					<Routes>
						<Route path="/porfolio-frontend" element={<MainPage />}></Route>
						<Route path="/porfolio-frontend/works" element={<MyWorksPage />}></Route>
						<Route path="/porfolio-frontend/profile" element={<Profile />}></Route>
					</Routes>
				</div>

				<Modal modalContact={modalContact} setModalContact={setModalContact} />
			</div>
		</Router>


	);
}

export default App;
