import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import AsideInfo from "../asideInfo/AsideInfo";
import { MainPage } from "../pages/index"
function App() {
	const [burger, setBurger] = useState(false);
	return (
		<>

			<div className="App">
				<AsideInfo burger={burger} />
				<AppHeader setBurger={setBurger} burger={burger} />

				<div className="wrapper">
					<MainPage />
				</div>

			</div>
		</>
	);
}

export default App;
