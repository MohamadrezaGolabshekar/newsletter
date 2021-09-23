import { useEffect, useState } from "react";
import BookmarkButton from "../../components/BookmarkButton";
import useGetData from "../../hooks/useGetData";
import { useQuery } from "../../hooks/useGetData";
import { CardItem } from "../../types/cardItem";
import { Container, Content, Img } from "./styledComponents";

const Detail = () => {

    const content = useGetData({
        section: "all",
        pageSize: 1,
        showFields: "headline,thumbnail,trailText,webPublicationDate,body"
    }, useQuery().get("api") || "");

    console.log(content)
    const item: CardItem = content.data.content as CardItem || {};

    return content.loading ?
        <h1>Loading...</h1> :

        <Container>
            <Content>
                <BookmarkButton text="Bookmark" />
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
            <Img src={item.fields.thumbnail} />
        </Container>

}

export default Detail;