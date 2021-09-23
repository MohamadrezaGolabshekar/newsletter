import { FC } from "react";
import NewsCard from "../NewsCard";
import { BottomContainer, TopContainer, TopCardContainer } from "./styledComponents";

type Props = {
    news: any[];
}

const TopStories: FC<Props> = ({ news }) => {

    return <>
        
        <TopContainer>
            <NewsCard item={news[0]} size="l" />
            <TopCardContainer>
                {
                    news.slice(1, 5).map(item => <NewsCard key={item.id} item={item} size="s" />)
                }
            </TopCardContainer>
        </TopContainer>
        <br /><br />
        <BottomContainer>
            {
                news.slice(5).map(item => <NewsCard key={item.id} item={item} size="m" />)
            }
        </BottomContainer>

    </>
};

export default TopStories;