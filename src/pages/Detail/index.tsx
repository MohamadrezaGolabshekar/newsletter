import { useEffect, useLayoutEffect, useState } from "react";
import BookmarkButton from "../../components/BookmarkButton";
import { Toast } from "../../components/Toast";
import useGetData from "../../hooks/useGetData";
import { useQuery } from "../../hooks/useGetData";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CardItem } from "../../types/cardItem";
import { Container, Content, Img } from "./styledComponents";

const Detail = () => {

    const [savedNews, setSavedNews] = useLocalStorage("saved", []);
    const [isSaved, setIsSaved] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const content = useGetData({
        section: "all",
        pageSize: 1,
        showFields: "headline,thumbnail,trailText,webPublicationDate,body"
    }, useQuery().get("api") || "");

    const item: CardItem = content.data.content as CardItem || {};

    useEffect(() => {
        if (savedNews?.length && item) {
            setIsSaved(!!savedNews.find((i: CardItem) => i.id === item.id))
        }
    }, [savedNews, item.id]);

    useLayoutEffect(() => {
        if (shouldUpdate) {
            const arr = savedNews.filter((i: CardItem) => i.id !== item.id);
            setSavedNews(isSaved ? [...arr, item] : [...arr]);
            setShowToast(true);
            setShouldUpdate(false);
            setTimeout(() => setShowToast(false), 1000);
        }
    }, [shouldUpdate]);

    return content.loading ?
        <h1>Loading...</h1> :

        <Container>
            <Content fullWidth={!!!item.fields.thumbnail}>
                <BookmarkButton
                    text={`${isSaved ? "REMOVE" : "ADD"} BOOKMARK`}
                    onClick={() => {
                        setIsSaved(s => !s)
                        setShouldUpdate(s => !s)
                    }}
                />
                <p>{item.webPublicationDate}</p>
                <h1>{item.webTitle}</h1>
                <h4>{item.fields.headline}</h4>

                {/* This dangerously-looking name was a built-in reminder to pay attention 
                    at correctly whitelisting the HTML tags I allowed the user to enter to 
                    that HTML string. */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: item.fields.body
                    }}
                ></div>
            </Content>
            {item.fields.thumbnail && <Img src={item.fields.thumbnail} />}

            {showToast &&
                <Toast isSuccess={isSaved}>
                    {`${!isSaved ? "REMOVED FROM" : "ADDED TO"} BOOKMARK`}
                </Toast>
            }
        </Container>

}

export default Detail;