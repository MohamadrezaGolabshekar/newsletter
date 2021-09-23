import { FC, memo } from "react";
import BookmarkButton from "../BookmarkButton";
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
                <select name="zz" id="">
                    <option value="ss">ss</option>
                </select>
            </Container>
        </Container>
    )
}

export default memo(SectionHeader);