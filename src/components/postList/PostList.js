import { useState, useCallback } from "react";
import { BsDot } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { v4 as uuidv4 } from 'uuid';
import "../postList/postList.scss";

const PostList = ({ postCards }) => {

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);

	const lastPostIndex = currentPage * postsPerPage;
	const firtsPostIndex = lastPostIndex - postsPerPage;
	const currentPost = postCards.slice(firtsPostIndex, lastPostIndex);

	const onArrowClick = (counter, posts, plusOrMines = true) => {
		const postLength = Math.floor(posts.length / 2);
		if (plusOrMines ? counter === 1 : counter === postLength - 1) {
			return
		}
		window.scrollBy(0, -1200);
		setCurrentPage(state => plusOrMines ? state - 1 : state + 1);
	}

	const renderPosts = useCallback(posts => {
		return posts.map(({ ...props }) => {
			return <PostCard key={uuidv4()} {...props} />
		})

	}, [postCards]);
	const onPostBtnClick = (index) => {
		if (index === currentPage) {
			return
		}
		setCurrentPage(index);
		window.scrollBy(0, -1200);

	}
	const renderBtnsList = (postsPerPage, totalPosts) => {
		const pageNumbers = [];

		for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
			pageNumbers.push(<button
				key={i}
				onClick={() => onPostBtnClick(i)}
				className={currentPage === i ? "active" : ""}
			>{i}</button>);
		}
		return (pageNumbers)
	}

	const elementsPost = renderPosts(currentPost);
	const elementsBtn = renderBtnsList(postsPerPage, postCards.length);

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
						<a href="#">????????????</a>
					</div>
				</div>

			</div>

		</div>
	)
}
export default PostList;