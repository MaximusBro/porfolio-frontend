import React from 'react'
import { MainPage, MyWorksPage } from "../pages/index";
import Profile from "../profile/Profile";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion"
import Post from '../post/Post';
import ProfileLogin from '../profile/ProfileLogin';
import ProfileSignUp from '../profile/ProfileSignUp';
function AnimatedRoutes() {
	const location = useLocation()
	return (
		<AnimatePresence>


			<Routes location={location} key={location.pathname} >
				<Route path="/porfolio-frontend" element={<MainPage />}></Route>
				<Route path="/porfolio-frontend/works" element={<MyWorksPage />}></Route>
				<Route path="/porfolio-frontend/profile" element={<Profile />}></Route>
				<Route path="/porfolio-frontend/1" element={<Post />}></Route>
				<Route path="/porfolio-frontend/login" element={<ProfileLogin />}></Route>
				<Route path="/porfolio-frontend/register" element={<ProfileSignUp />}></Route>
			</Routes >
		</AnimatePresence>
	)
}

export default AnimatedRoutes