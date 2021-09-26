import { FC, memo } from "react";
import { Container } from "./styledComponents";
import { CardItem } from "../../types/cardItem";
import { Link } from "react-router-dom";

type Props = {
    item: CardItem
    size?: "s" | "m" | "l"
}

const colors = ["red", "blue", "green", "yellow"];

const shortText = (text: string = "", limit: number) => (
    text.length < limit ? text : `${text.substring(0, limit)}...`
);

const NewsCard: FC<Props> = ({ item, size = "m" }) => {

    return (
        <Link to={`/detail?api=${item.apiUrl}`}>
            <Container
                onClick={() => window.scrollTo(0, 0)}
                size={size}
                color={colors[Math.floor(Math.random() * 4)]}
                imgUrl={item?.fields?.thumbnail}
            >
                <div>
                    <h3>{shortText(item?.webTitle, size === "s" ? 40 : size === "l" ? 100 : 50)}</h3>
                    <p>{shortText(item?.fields?.bodyText, size === "s" ? 60 : size === "l" ? 120 : 70)}</p>
                </div>
            </Container>
        </Link>
    )
}

export default memo(NewsCard);