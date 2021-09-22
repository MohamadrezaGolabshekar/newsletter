import useGetData from "../../hooks/useGetData";

const TopStories = () => {
    const topStories = useGetData({section: "news", pageSize: 8});
    console.log("topStories :: ", topStories);

    return <h2>TopStories</h2>
};

export default TopStories;