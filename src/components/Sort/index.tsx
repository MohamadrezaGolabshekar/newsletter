import { FC, memo } from "react";
import { Select } from "./styledComponents";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/useGetData";


const Sort: FC = () => {

    const history = useHistory();
    const location = useLocation();
    const order = useQuery().get("order");

    const changeHandler = (e: any) => {
        const name = "order";
        const query = e.target.value;
        const params = new URLSearchParams(location.search.substring(1));

        if (query) {
            params.delete(name);
            params.append(name, query);
        } else {
            params.delete(name);
        }
        history.push({ search: params.toString() })
    }

    return (
        <Select name="sort" onChange={changeHandler} value={order || "newest"}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
        </Select>
    )
}

export default memo(Sort);