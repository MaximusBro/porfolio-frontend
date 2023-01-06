import { useState, useEffect, useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { BsDot } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { v4 as uuidv4 } from 'uuid';
import "../postList/postList.scss";

const PostList = ({ postCards, setPostCards }) => {
	const [currentPage, setCounterPost] = useState(1);

	const renderPosts = useCallback((arr, counterPost) => {

		if (arr.length === 0) {
			return <h5 className="text-center mt-5">Posts doesn't exist</h5>
		}

		let result = [];
		let counter = counterPost - 1;

		for (let i = 0 + counter * 3; i <= 2 + counter * 3; i++) {
			let props = arr[i];
			if (props === undefined) {
				break
			}
			result[i] =
				<PostCard key={uuidv4()} {...props} />

		}
		/* return arr.map(({ ...props }) => {
			return <PostCard key={uuidv4()} {...props} />
		}) */
		return result
		// eslint-disable-next-line
	}, [postCards]);

	const renderBtnsList = useCallback((posts) => {
		let counter = Math.round(posts.length / 2);

		const result = [];
		for (let i = 1; i < counter; i++) {

			result[i] =
				<button
					key={i}
					className={`postlist-arrows__item ${currentPage === i ? "active" : ""}`}
					onClick={() => {
						setCounterPost(i);
					}}
				>{i}</button >
		}
		return result;
		// eslint-disable-next-line
	}, [counterPost])

	const onArrowClick = (counter, posts, plusOrMines = true) => {
		const postLength = Math.floor(posts.length / 2);
		console.log(postLength)
		if (plusOrMines ? counter === 1 : counter === postLength - 1) {
			return
		}
		setCounterPost(state => plusOrMines ? state - 1 : state + 1);
	}

	const elementsPost = renderPosts(postCards, currentPage);
	const elementsBtn = renderBtnsList(postCards);
	return (
		<div className="postlist">
			<div className="postlist-column">
				{elementsPost}
			</div>
			<div className="postlist-arrows">
				<button><MdKeyboardArrowLeft style={{ "width": "60%", "height": "100%" }}
					onClick={() => onArrowClick(currentPage, postCards)}
				/></button>
				<ul className="postlist-arrows__list">
					{elementsBtn}
				</ul>
				<button><MdKeyboardArrowRight style={{ "width": "60%", "height": "100%" }}
					onClick={() => onArrowClick(currentPage, postCards, false)}

				/></button>
			</div>
		</div>

	)
}
const PostCard = ({ category, title, description, date, img }) => {
	return (
		<div className="postlist-column-card">
			<div className="postlist-column-card__title">
				<img src={img} alt="" />
			</div>
			<div className="postlist-column-card__text">
				<h2>{title}</h2>
				<p>{description}</p>
				<div className="postlist-column-card__footer">
					<div>
						<p>{date}</p>
						<BsDot style={{ "color": " #C4C4C4" }} />
						<p>{category}</p>
					</div>
					<div>
						<a href="#">читать</a>
					</div>
				</div>

			</div>

		</div>
	)
}
export default PostList;