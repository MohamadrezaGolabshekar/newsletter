import { FC, memo } from "react";
import BookmarkButton from "../BookmarkButton";
import Sort from "../Sort";
import { Container } from "./styledComponents";

type Props = {
    title: string;
    isBookMark: boolean;
}


const SectionHeader: FC<Props> = ({ title, isBookMark }) => {

    return (
        <Container>
            <h1>{title}</h1>
            {isBookMark && <Container>
                <BookmarkButton text="VIEW BOOKMARK" redirect />
                <Sort />
            </Container>}
        </Container>
    )
}

export default memo(SectionHeader);