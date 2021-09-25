import { FC } from "react";
import NewsCard from "../NewsCard";
import { BottomContainer, TopContainer, TopCardContainer, HotStory } from "./styledComponents";

type Props = {
    news: any[];
}

const TopStories: FC<Props> = ({ news }) => {

    return news && news.length ? <>

        <TopContainer>
            <HotStory>
                <NewsCard item={news[0]} size="l" />
            </HotStory>
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

    </> : null;
};

export default TopStories;