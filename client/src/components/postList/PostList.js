import { useState, useCallback, useEffect, useRef } from "react";
import { BsDot } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Transition } from 'react-transition-group';

import "../postList/postList.scss";
import { fetchPosts, PostCardsSelector } from "./PostListSlice"

const PostList = () => {
	// TRANSITION
	const duration = 300;
	const defaultStyle = {
		transition: `opacity ${duration}ms ease-in-out`,
		opacity: 0,
	}

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
	};
	//USESTATE && USESELECTOR
	const postCards = useSelector(PostCardsSelector);
	const [displayPosts, setdisplayPosts] = useState(true)
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);

	// FOR PAGINATION
	const lastPostIndex = currentPage * postsPerPage;
	const firtsPostIndex = lastPostIndex - postsPerPage;
	const currentPost = postCards.slice(firtsPostIndex, lastPostIndex);


	const myRef = useRef()

	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(fetchPosts());
	}, []);



	const onArrowClick = (counter, plusOrMines = true) => {

		const length = Math.ceil(postCards.length / postsPerPage)
		console.log(length)
		if (plusOrMines ? counter === 1 : counter === length) {
			return
		}
		myRef.current.scrollIntoView({
			behavior: "smooth",
		});
		setdisplayPosts(false)
		setTimeout(() => {
			setdisplayPosts(true)
			setCurrentPage(state => plusOrMines ? state - 1 : state + 1);
		}, duration)

	}

	const renderPosts = useCallback(posts => {
		return posts.map(({ ...props }) => {
			return <PostCard key={uuidv4()} {...props} />
		})

	}, [postCards]);

	const onPostBtnClick = (index) => {
		if (index === currentPage) return

		setdisplayPosts(false)
		setTimeout(() => {
			setdisplayPosts(true)
			setCurrentPage(index);
		}, duration)

		myRef.current.scrollIntoView({
			behavior: "smooth",
		});
	}
	const renderBtnsList = (postsPerPage, totalPosts) => {
		const pageNumbers = [];

		for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
			pageNumbers.push(<button
				key={i}
				onClick={() => {
					onPostBtnClick(i)

				}}
				className={currentPage === i ? "active" : ""}
			>{i}</button>);
		}
		return (pageNumbers)
	}

	const elementsPost = renderPosts(currentPost);
	const elementsBtn = renderBtnsList(postsPerPage, postCards.length);

	return (
		<div className="postlist" ref={myRef}>
			<Transition in={displayPosts} timeout={duration}>
				{state => (
					<div className="postlist-column" style={{
						...defaultStyle,
						...transitionStyles[state]
					}}>
						{elementsPost}

					</div>
				)
				}

			</Transition >

			<div className="postlist-arrows">
				<button><MdKeyboardArrowLeft style={{ "width": "60%", "height": "100%" }}
					onClick={() => onArrowClick(currentPage)}
				/></button>
				<ul className="postlist-arrows__list">
					{elementsBtn}
				</ul>
				<button><MdKeyboardArrowRight style={{ "width": "60%", "height": "100%" }}
					onClick={() => onArrowClick(currentPage, false)}

				/></button>
			</div>
		</div >
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