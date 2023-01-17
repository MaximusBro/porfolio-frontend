import "../postForm/postForm.scss";
import { AiFillCamera } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { PostCreated } from "../postList/PostListSlice";
const PostForm = () => {

	const [text, setText] = useState("");
	const [file, setFile] = useState([]);

	const { request } = useHttp();
	const dispatch = useDispatch();

	const onChangeFile = e => {
		console.log('file: ', file);
		setFile(e.target.files[0]);
	};
	const onChangeText = (e) => {

		setText(e.target.value);

	}
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (!text === "" || !file) {
			return new Error("надо вести тварь щось!");
		}

		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		const newPost = {
			id: uuidv4(),
			category: "all",
			title: text[0],
			description: text,
			date: `${date}.${month}.${year}`,
			img: ""

		}
		request("http://localhost:3001/posts", "POST", JSON.stringify(newPost))
			.then(dispatch(PostCreated(newPost)));

		setFile("");
		setText("");
	}
	return (
		<>
			<form action="" className="postForm" onSubmit={onSubmitForm}>
				<input type="text"
					value={text}
					name="postText"
					placeholder="Write something"
					onChange={onChangeText} />
				<input type="file"
					name="file"
					id="file"

					onChange={onChangeFile} />

				<label htmlFor="file"><AiFillCamera
					style={{ "width": "60%", "height": "60%", "color": "#989898" }} /></label>
				<button type="submit">
					<IoMdSend style={{ "width": "60%", "height": "60%", "color": "white" }} />
				</button>
			</form>
		</>
	)
}
export default PostForm;
