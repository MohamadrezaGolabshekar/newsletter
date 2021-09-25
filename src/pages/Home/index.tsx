import useGetData from "../../hooks/useGetData";
import TopStories from "../../components/TopStories";
import NewsSections from "../../components/NewsSections";
import SectionHeader from "../../components/SectionHeader";
import Loading from "../../components/Loading";

const Home = () => {
    const topStories = useGetData({
        section: "news",
        pageSize: 8,
        showFields: "headline,thumbnail,trailText,firstPublicationDate,bodyText"
    });

    return <>
        <SectionHeader title="Top stories" isBookMark />
    {
        topStories.loading ?
        <Loading /> : <>
            <TopStories news={topStories.data.results} />
            <NewsSections />
        </>
    }
    </>
}

export default Home;