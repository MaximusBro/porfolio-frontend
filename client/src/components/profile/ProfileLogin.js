import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm"
import { motion } from "framer-motion";
import { setUser } from "../../store/slices/userSlices";
const ProfileLogin = ({ setLogin }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}))
				navigate("/porfolio-frontend/profile")
			}).catch(console.log)

	}

	/* const usersCollectionRef = collection(db, "users") */
	/* 
		const { request } = useHttp();
		const onSubmit = (event) => {
			event.preventDefault(); */

	/* 	const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			console.log(data.data)
			setUser(data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id
			})))
		}
		getUsers(); */
	/* 	request("http://localhost:3001/users")
			.then(data => {
				for (let i = 0; i <= data.length; i++) {
					if (email === data[i].email && password === data[i].password) {
						setUser({ ...data[i] });
						setLogin(true)
						return
					}
				}
			}) */
	/* } */
	return (
		<motion.div initial={{ opacity: 0 }}
			animate={{ opacity: 1 }
			}
			exit={{ opacity: 0 }}>

			<ProfileForm
				title="sign in"
				hadleclick={handleLogin}
			/>
			<p>Haven't account <Link to="/porfolio-frontend/register">Sign up</Link></p>


			{/* <div className="profile__header">
				<h2>Sign in</h2>
			</div>
			<div className="profile-login">
				<form action="#" onSubmit={onSubmit} >
					<input type="email" name="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)} />
					<input type="password" name="password" placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)} />
					<button type="submit">Sign in</button>
					<div className="profile__links">
						<a href="google.com">Recover</a>
						<a href="google.com">Sign Up</a>
					</div>
				</form>
			</div>
 */}
		</motion.div>
	)
}
export default ProfileLogin