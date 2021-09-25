import { FC, memo } from "react";
import { Button } from "./styledComponents";
import { ReactComponent as IconOff } from "../../assets/bookmarkoff-icon@2x.svg";
import { ReactComponent as IconOn } from "../../assets/bookmarkon-icon@2x.svg";
import { useHistory } from "react-router-dom";

type Props = {
    text: string;
    isOn?: boolean;
    onClick?: () => void;
    redirect?: boolean;
}

const BookmarkButton: FC<Props> = ({ text, onClick, redirect, isOn = true }) => {
    const history = useHistory();
    return (
        <Button onClick={() => redirect ? history.push('/bookmarks') : onClick?.()}>
            {isOn ? <IconOn style={{ width: 18 }} /> : <IconOff style={{ width: 18 }} />}
            &nbsp;
            {text}
        </Button>
    )
}

export default memo(BookmarkButton);