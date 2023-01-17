import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
const ProfileLogin = ({ setUser, setLogin }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")

	const { request } = useHttp();
	const onSubmit = (event) => {
		event.preventDefault();
		request("http://localhost:3001/users")
			.then(data => {
				console.log(data)
				for (let i = 0; i <= data.length; i++) {
					if (email === data[i].email && password === data[i].password) {
						setUser({ ...data[i] });
						setLogin(true)
						return
					}
				}

			})
	}
	return (
		<>
			<div className="profile__header">
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

		</>
	)
}
export default ProfileLogin