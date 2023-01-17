import { useState, createRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "../animatedRoutes/AnimatedRoutes";
import AppHeader from "../appHeader/AppHeader";
import AsideInfo from "../asideInfo/AsideInfo";
import Modal from "../modal/Modal";


function App() {
	const [burger, setBurger] = useState(false);
	const [modalContact, setModalContact] = useState(false);






	return (
		<Router>
			<div className="App">
				<AsideInfo burger={burger} modalContact={modalContact} setModalContact={setModalContact} />
				<AppHeader setBurger={setBurger} burger={burger} />

				<div className="wrapper">
					<AnimatedRoutes />
				</div>

				<Modal modalContact={modalContact}
					setModalContact={setModalContact} />
			</div>
		</Router>


	);
}

export default App;
