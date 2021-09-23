import useGetData from "../../hooks/useGetData";
import SectionHeader from "../../components/SectionHeader";

const Bookmarks = () => {
    // const topStories = useGetData({
    //     section: "news",
    //     pageSize: 8,
    //     showFields: "headline,thumbnail,trailText,firstPublicationDate"
    // });

    return <>
            <SectionHeader title="All bookmarks" hasBookMark={false} />
            
        </>
}

export default Bookmarks;