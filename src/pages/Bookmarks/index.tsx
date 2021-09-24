import useLocalStorage from "../../hooks/useLocalStorage";
import SectionHeader from "../../components/SectionHeader";
import NewsCard from "../../components/NewsCard";
import { Container } from "./styledComponents";

const Bookmarks = () => {
    const [savedNews] = useLocalStorage("saved", []);

    return <>
        <SectionHeader title="All bookmarks" isBookMark={false} />

        {
            savedNews.length ?
                <Container >
                    {
                        savedNews.map((item: any) => <NewsCard key={item.id} item={item} size="m" />)
                    }
                </Container>
                :
                <h2>Empty list :(</h2>
        }
    </>
}

export default Bookmarks;