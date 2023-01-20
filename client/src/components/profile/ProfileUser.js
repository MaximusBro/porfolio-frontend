import logo from "../../../src/img/png/avatarProfile.png";
import axios from "axios"
import { useState, useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useSelector } from "react-redux";
const ProfileUser = ({ user, avatar, setUser, setAvatar, setLogin }) => {

	const {
		email,
		name,
		id,
		avatarSRC,
		token } = useSelector(state => state.user)



	/* const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState(user.password);
	const [confirmPassword, setConfirmPassword] = useState("")

	const [img, setImg] = useState(null);
 */



	/* const onSubmit = (event) => {
		event.preventDefault();

		const newUser = {
			name,
			email,
			password
		}

		request(`http://localhost:3001/users/${user.id}/`,
			"PUT",
			JSON.stringify(newUser));

		setUser(state => {
			return {
				...state,
				...newUser
			}
		});
		setConfirmPassword("")
	} */
	/* const chackNewPassword = (event) => {
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
					setUser(state => {
						return {
							...state,
							avatarSRC: `http://localhost:5000/${res.data.path}`
						}
					})
					localStorage.setItem("avatarSRC", JSON.stringify(`http://localhost:5000/${res.data.path}`));
					const newSRC = {
						...user,
						avatarSRC: `http://localhost:5000/${res.data.path}`
					}
					request(`http://localhost:3001/users/${user.id}/`,
						"PUT",
						JSON.stringify(newSRC));

				});

		} catch (error) {

		}
	}, [img]) */
	return (
		<>
			<div className="profile__title">
				<h2>Profile</h2>
			</div>
			<div className="profile-info">
				<div className="profile-info__form">
					<form action="" >
						<input type="text"
							value={name}
							placeholder="Name"
						/>
						<input type="email"
							placeholder="Email"
							value={email}
						/>

						<input type="password"
							placeholder="New password"

						/>

						<input type="password"
							placeholder="Confirm password"
						/>

						<button type="submit">Submit</button>
						<button >Logout</button>
					</form>
				</div>
				<div className="profile-info__avatar">

					<input type="file"

						placeholder="Choose file" />
					<button className="btn">Change Avatar</button>
				</div>
			</div>
		</>
	)
}
export default ProfileUser