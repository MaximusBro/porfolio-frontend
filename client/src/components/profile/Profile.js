import { useState, useEffect } from "react";
import ProfileLogin from "./ProfileLogin";
import ProfileUser from "./ProfileUser";
import { Link, Navigate } from "react-router-dom";
import "../profile/profile.scss";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom"
import { redirect } from "react-router-dom";
const Profile = () => {

	const { isAuth, email } = useAuth()
	console.log(isAuth)
	const navigate = useNavigate()
	/* 
		const [user, setUser] = useState(() => {
			const saved = localStorage.getItem("user");
			const initialValue = JSON.parse(saved);
			return initialValue || { name: "", email: "", avatar: "" }
		}
		);
		const [login, setLogin] = useState(() => {
				if (user.email.length > 0) {
					return true;
				} else {
					return false
				}
	
		}); */
	/* 	const [avatar, setAvatar] = useState(() => {
			const saved = localStorage.getItem("avatarSRC");
			const initialValue = JSON.parse(saved);
			return initialValue || null;
		}) */

	/* useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user))
	}, [user]);
 */
	return (
		<motion.section className="profile"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }
			}
			exit={{ opacity: 0 }}>
			<div className="wrapper">

				{isAuth ?
					<ProfileUser />
					:
					<ProfileLogin />}

				{/* 	{
					!login ?
						<ProfileLogin
							setLogin={setLogin}
							setUser={setUser} />
						:
						<ProfileUser
							user={user} setUser={setUser}
							avatar={avatar} setAvatar={setAvatar}
							setLogin={setLogin} />} */}
			</div>
		</motion.section>
	)
}

export default Profile;