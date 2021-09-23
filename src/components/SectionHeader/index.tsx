import { FC, memo } from "react";
import BookmarkButton from "../BookmarkButton";
import Sort from "../Sort";
import { Container } from "./styledComponents";

type Props = {
    title: string;
    hasBookMark: boolean;
}


const SectionHeader: FC<Props> = ({ title, hasBookMark }) => {

    return (
        <Container>
            <h1>{title}</h1>
            <Container>
                {hasBookMark && <BookmarkButton text="VIEW BOOKMARK" redirect />}
                
                <Sort />
            </Container>
        </Container>
    )
}

export default memo(SectionHeader);