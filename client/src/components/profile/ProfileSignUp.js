import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import ProfileForm from "./ProfileForm"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import React from 'react'
import { Link } from "react-router-dom";
import { setUser } from "../../store/slices/userSlices";
const ProfileSignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}))
				navigate("/porfolio-frontend")
			}).catch(console.log)
	}
	return (
		<motion.div initial={{ opacity: 0 }}
			animate={{ opacity: 1 }
			}
			exit={{ opacity: 0 }}>
			<ProfileForm
				title={"register"}
				hadleclick={handleRegister}
			/>
			<p>Already have an account? <Link to="/porfolio-frontend/login">Sign in</Link></p>
		</motion.div>

	)
}

export default ProfileSignUp