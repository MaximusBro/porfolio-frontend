import { useState } from "react";

import React from 'react'
import "./profileForm.scss"
const ProfileForm = ({ title, hadleclick }) => {
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")


	return (
		<div className="profile-form">
			<input type="email" name="email"
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)} />
			<input type="password" name="password" placeholder="password"
				value={pass}
				onChange={(e) => setPass(e.target.value)} />
			<button onClick={() => hadleclick(email, pass)}>
				{title}
			</button>
		</div>
	)
}

export default ProfileForm;