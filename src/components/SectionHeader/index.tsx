import { FC, memo } from "react";
import BookmarkButton from "../BookmarkButton";
import Sort from "../Sort";
import { Container, BookmarkWrapper } from "./styledComponents";

type Props = {
    title: string;
    isBookMark: boolean;
}


const SectionHeader: FC<Props> = ({ title, isBookMark }) => {

    return (
        <Container>
            <h1>{title}</h1>
            {isBookMark && <Container>
                <BookmarkWrapper><BookmarkButton text="VIEW BOOKMARK" redirect /></BookmarkWrapper>
                <Sort />
            </Container>}
        </Container>
    )
}

export default memo(SectionHeader);