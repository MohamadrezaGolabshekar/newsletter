import { FC } from "react";

type Props = {
    news: any[];
}

const TopStories: FC<Props> = ({ news }) => {

    return <h2>TopStories {news.length}</h2>
};

export default TopStories;