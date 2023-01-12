
import PostForm from "../postForm/PostForm"
import PostList from "../postList/PostList"
import StoryList from "../storyList/StoryList"

const MainPage = ({ postCards, setPostCards }) => {


	return (
		<>
			<StoryList />
			<PostForm setPostCards={setPostCards} />
			<PostList postCards={postCards} />
		</>
	)
}
export default MainPage