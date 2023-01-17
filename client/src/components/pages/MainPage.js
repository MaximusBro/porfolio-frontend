
import { useRef } from "react"
import PostForm from "../postForm/PostForm"
import PostList from "../postList/PostList"
import StoryList from "../storyList/StoryList"
import { motion } from "framer-motion";
import "../pages/MainPage.scss"
const MainPage = () => {

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="mainpage">
			<StoryList />
			<PostForm />
			<PostList />
		</motion.div >
	)
}
export default MainPage