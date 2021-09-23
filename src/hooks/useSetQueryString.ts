import { useEffect } from "react";
import { useHistory } from "react-router-dom"


const useSetQueryString = (name: string, query: string, newPath?: string) => {

    const history = useHistory();

    useEffect(() => {
        const params = new URLSearchParams()
        if (query) {
            params.append(name, query)
        } else {
            params.delete(name);
        }
        if (newPath && query) {
            history.push(`${newPath}?${params.toString()}`)
        } else {
            history.push({ search: params.toString() })
        }
    }, [name, query, history, newPath])
};

export default useSetQueryString;