import { FC, memo } from "react";
import { Container } from "./styledComponents";
import { CardItem } from "../../types/cardItem";

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
        <Container size={size} color={colors[Math.floor(Math.random() * 4)]} imgUrl={item?.fields?.thumbnail}>
            <div>
                <h3>{shortText(item?.webTitle, size === "s" ? 40 : size === "l" ? 100 : 70)}</h3>
                <p>{shortText(item?.fields?.trailText, size === "s" ? 70 : size === "l" ? 120 : 100)}</p>
            </div>
        </Container>
    )
}

export default memo(NewsCard);