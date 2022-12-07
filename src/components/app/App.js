import AppHeader from "../appHeader/AppHeader";
import AsideInfo from "../asideInfo/AsideInfo";
import PostForm from "../postForm/PostForm";
import PostList from "../postList/PostList";
import StoryList from "../storyList/StoryList";

function App() {
	return (
		<>

			<div className="App">
				<AsideInfo />
				<AppHeader />

				<div className="wrapper">
					<StoryList />
					<PostForm />
					<PostList />
				</div>

			</div>
		</>
	);
}

export default App;
