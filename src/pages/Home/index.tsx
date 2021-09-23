import useGetData from "../../hooks/useGetData";
import TopStories from "../../components/TopStories";
import NewsSections from "../../components/NewsSections";

const Home = () => {
    const topStories = useGetData({
        section: "news",
        pageSize: 8,
        showFields: "headline,thumbnail,trailText,firstPublicationDate"
    });

    return topStories.loading ?
        <h1>Loading...</h1> : <>
            <div>
                <h1>Top stories</h1>
            </div>
            <TopStories news={topStories.data.results} />
            <NewsSections />
        </>
}

export default Home;