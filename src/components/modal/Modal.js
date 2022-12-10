import "../modal/modal.scss";

const Modal = () => {
	return (
		<div className="modal hidden">
			<div className="modal-contact hidden">
				<div className="modal-contact__close">
					<button>&#10006;</button>
				</div>
				<div className="modal-contact__form">
					<form action="">
						<div></div>
						<input type="text" placeholder="Your name" />
						<input type="text" name="" placeholder="Ваш e-mail" />
						<input type="email" name="" placeholder="Текст сообщения" />
						<button type="submit">Send</button>
					</form>
				</div>
				<div className="modal-contact__footer">
					<ul className="modal-contact__list">
						<li className="modal-contact__item">email: info@mywebsite.ua</li>
						<li className="modal-contact__item">Number: +380 999 999</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Modal;