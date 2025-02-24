import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import useGetData from "../../hooks/useGetData";
import useScrollHandler from "../../hooks/useScrollHandler";
import NewsCard from "../../components/NewsCard";
import { Container } from "./styledComponents";
import SectionHeader from "../../components/SectionHeader";
import Loading from "../../components/Loading";

const SearchList = () => {

    const [page, setPage] = useState(1);
    const [list, setList] = useState<any>([]);
    const location = useLocation();

    const data = useGetData({
        page,
        section: "sport|news|culture|lifeandstyle",
        pageSize: 15,
        showFields: "headline,thumbnail,trailText,firstPublicationDate,bodyText"
    });
    const isLoadMore = useScrollHandler("search-list", !data.loading)

    useEffect(() => {
        if (data?.data?.results) {
            setList((l: any) => ([...l, ...data.data.results]));
        }
    }, [data.data.results])

    useEffect(() => {
        if (isLoadMore && !data.loading && data.data.results.length) {
            setPage(s => s + 1);
        }
    }, [isLoadMore, data.loading])

    useEffect(() => {
        setList([]);
        setPage(1);
    }, [location.search])


    return <div id="search-list">
        <SectionHeader title="Search results" isBookMark />
        {
            data.loading && page === 1 ?
                <Loading /> :
                list.length ?                
                <>

                    <Container >
                        {
                            list.map((item: any) => <NewsCard key={`${item.id}-${new Date().getTime()}`} item={item} size="m" />)
                        }
                    </Container>
                    {data.loading && page > 0 && <Loading size={40} height="100px" />}
                </> :
                <h2>Empty list :(</h2>
        }

    </div>
}

export default SearchList;