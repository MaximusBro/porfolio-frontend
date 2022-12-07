import "../postForm/postForm.scss";
import { AiFillCamera } from "react-icons/ai"
import { IoMdSend } from "react-icons/io"
const PostForm = () => {
	return (
		<>
			<form action="" className="postForm">
				<input type="text" name="postText" placeholder="Write something" />
				<input type="file" name="" id="file" />

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
