import "../profile/profile.scss";
const Profile = () => {
	return (
		<section className="profile">
			<div className="wrapper">
				<div className="profile__title">
					<h2>Sign in</h2>
				</div>

				<form action="#" >
					<input type="email" name="email" placeholder="email" />
					<input type="password" name="password" placeholder="password" />
					<button type="submit">Sign in</button>
					<div className="profile__links">
						<a href="google.com">Recover</a>
						<a href="google.com">Sign Up</a>
					</div>
				</form>
			</div>
		</section>
	)
}
export default Profile;