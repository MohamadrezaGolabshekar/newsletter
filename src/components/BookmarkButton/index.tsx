import { FC, memo } from "react";
import { Button } from "./styledComponents";
// import { ReactComponent as Icon } from "../../assets/bookmarkoff-icon@2x.svg";
import { useHistory } from "react-router-dom";

type Props = {
    text: string;
    onClick?: () => {};
    redirect?: boolean;
}

const BookmarkButton: FC<Props> = ({ text, onClick, redirect }) => {
    const history = useHistory();
    return (
        <Button onClick={() => redirect ? history.push('/bookmarks') : onClick?.()}>{text}</Button>
    )
}
 
export default memo(BookmarkButton);