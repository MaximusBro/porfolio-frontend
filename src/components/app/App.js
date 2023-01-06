import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import AsideInfo from "../asideInfo/AsideInfo";
import Modal from "../modal/Modal";
import { useHttp } from "../hooks/http.hook";
import { MainPage, MyWorksPage } from "../pages/index";
import Profile from "../profile/Profile";
function App() {
	const [burger, setBurger] = useState(false);
	const [modalContact, setModalContact] = useState(false);
	const [postCards, setPostCards] = useState([]);
	const { request } = useHttp();

	useEffect(() => {

		request("http://localhost:3001/posts")
			.then(data => setPostCards(data))
			.catch(error => { throw new Error("Failude to get posts", error) })
		// eslint-disable-next-line
	}, []);

	return (
		<Router>
			<div className="App">
				<AsideInfo burger={burger} modalContact={modalContact} setModalContact={setModalContact} />
				<AppHeader setBurger={setBurger} burger={burger} />

				<div className="wrapper">
					<Routes>
						<Route path="/porfolio-frontend" element={<MainPage postCards={postCards} setPostCards={setPostCards} />}></Route>
						<Route path="/porfolio-frontend/works" element={<MyWorksPage />}></Route>
						<Route path="/porfolio-frontend/profile" element={<Profile />}></Route>
					</Routes>
				</div>

				<Modal modalContact={modalContact}
					setModalContact={setModalContact} />
			</div>
		</Router>


	);
}

export default App;
