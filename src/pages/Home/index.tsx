import useGetData from "../../hooks/useGetData";
import TopStories from "../../components/TopStories";
import NewsSections from "../../components/NewsSections";

const Home = () => {
    const topStories = useGetData({ section: "news", pageSize: 8 });
    
    return topStories.loading ?
        <h1>Loading...</h1> : <>
            <TopStories news={topStories.data.results}/>
            <NewsSections />
        </>
}

export default Home;