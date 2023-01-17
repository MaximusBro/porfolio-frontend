import React from 'react'
import { MainPage, MyWorksPage } from "../pages/index";
import Profile from "../profile/Profile";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion"
function AnimatedRoutes() {
	const location = useLocation()
	return (
		<AnimatePresence>


			<Routes Routes location={location} key={location.pathname} >
				<Route path="/porfolio-frontend" element={<MainPage />}></Route>
				<Route path="/porfolio-frontend/works" element={<MyWorksPage />}></Route>
				<Route path="/porfolio-frontend/profile" element={<Profile />}></Route>
			</Routes >
		</AnimatePresence>
	)
}

export default AnimatedRoutes