import useGetData from "../../hooks/useGetData";
import TopStories from "../../components/TopStories";
import NewsSections from "../../components/NewsSections";
import SectionHeader from "../../components/SectionHeader";

const Home = () => {
    const topStories = useGetData({
        section: "news",
        pageSize: 8,
        showFields: "headline,thumbnail,trailText,firstPublicationDate,bodyText"
    });

    return <>
        <SectionHeader title="Top stories" hasBookMark />
    {
        topStories.loading ?
        <h1>Loading...</h1> : <>
            <TopStories news={topStories.data.results} />
            <NewsSections />
        </>
    }
    </>
}

export default Home;