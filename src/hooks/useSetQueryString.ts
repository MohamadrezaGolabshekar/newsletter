import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"


const useSetQueryString = (name: string, query: string, newPath?: string) => {
    const history = useHistory();
    const location = useLocation();
    
    useEffect(() => {
        const qs = location.search.substring(1);
        const params = new URLSearchParams(qs);
        if (qs.indexOf("api=") >= 0) {
            params.delete(name);
            history.push({ search: params.toString() })
            return;
        };
        if (query) {
            params.delete(name);
            params.append(name, query);
        } else {
            params.delete(name);
        }
        if (newPath && query) {
            history.push(`${newPath}?${params.toString()}`)
        } else {
            history.push({ search: params.toString() })
        }
    }, [name, query, newPath])
};

export default useSetQueryString;