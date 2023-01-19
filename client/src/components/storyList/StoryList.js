import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import "../storyList/storyList.scss";
const StoryList = () => {
	const [stories, setStories] = useState([]);
	const limitStories = 4;

	const { request } = useHttp();

	useEffect(() => {

		request("http://localhost:3001/stories")
			.then(data => setStories(data))
			.catch(error => { throw new Error("Failude to get stories", error) })
		// eslint-disable-next-line
	}, []);

	const renderStories = (arr) => {
		return arr.filter((item, index) => index < limitStories).map(({ ...props }, index) => {
			return <Story key={index} {...props} />
		})
	}
	const elementsStory = renderStories(stories);
	return (
		<div className="story">
			<div className="story-column">
				{elementsStory}
			</div>
		</div>
	)
}
const Story = ({ title, date, imgSRC }) => {
	return (
		<div className="story-column-card"
			style={{
				backgroundImage: `url( "${imgSRC}"`
			}}>
			<div className="story-column-card__title">
				<h2>{title}</h2>
			</div>
			<div className="story-column-card__date">
				<p>{date}</p>
			</div>
		</div>
	)
}
export default StoryList;