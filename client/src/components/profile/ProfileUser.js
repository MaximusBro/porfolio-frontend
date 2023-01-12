import logo from "../../../src/img/png/avatarProfile.png";
import axios from "axios"
import { useState, useCallback } from "react";
import { useHttp } from "../hooks/http.hook";

const ProfileUser = ({ user, avatar, setUser, setAvatar, setLogin }) => {
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState(user.password);
	const [confirmPassword, setConfirmPassword] = useState("")

	const [img, setImg] = useState(null);


	const { request } = useHttp();
	const onSubmit = (event) => {
		event.preventDefault();

		const newUser = {
			name,
			email,
			password
		}

		request(`http://localhost:3001/users/1/`,
			"PUT",
			JSON.stringify(newUser));

		setUser(state => {
			return {
				...state,
				...newUser
			}
		});
		setConfirmPassword("")
	}
	const chackNewPassword = (event) => {
		if (event.target.value === confirmPassword) {
			setPassword(event.target.value)
		} else {
			throw new Error("Неправильне пітвердження")
		}
	}
	const sendFile = useCallback(async () => {
		try {
			const data = new FormData();
			data.append("avatar", img);
			await axios.post("/api/upload", data, {
				headers: {
					"content-type": "multipart/form-data"
				}
			})
				.then(res => {
					setAvatar(`http://localhost:5000/${res.data.path}`)
					localStorage.setItem("avatarSRC", JSON.stringify(`http://localhost:5000/${res.data.path}`))
				})
		} catch (error) {

		}
	}, [img])
	return (
		<>
			<div className="profile__title">
				<h2>Profile</h2>
			</div>
			<div className="profile-info">
				<div className="profile-info__form">
					<form action="" onSubmit={onSubmit}>
						<input type="text"
							value={name}
							placeholder="Name"
							onChange={(e) => setName(e.target.value)} />
						<input type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)} />

						<input type="password"
							placeholder="New password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)} />

						<input type="password"
							placeholder="Confirm password"
							onChange={chackNewPassword} />

						<button type="submit">Submit</button>
						<button onClick={() => {
							setLogin(false);
							setUser(null)

						}}>Logout</button>
					</form>
				</div>
				<div className="profile-info__avatar">
					{
						avatar
							?
							<img src={avatar} alt="" />
							:
							<img src={logo} alt="" />
					}
					<input type="file" onChange={e => setImg(e.target.files[0])}

						placeholder="Choose file" />
					<button className="btn" onClick={sendFile}>Change Avatar</button>
				</div>
			</div>
		</>
	)
}
export default ProfileUser