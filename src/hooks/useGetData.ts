import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData, { QueryObj } from "../utils/getData";

type Resp = {
    results: any[];
    content?: object;
}

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

/**
 * maybe we have pending request for request and absolutely we will have memory leak issue 
 * so I use CancelToken feature in axios to cancel requests in unmounting phase
 */
const useGetData = (queryObj: QueryObj = {}, baseUrl?: string) => {

    const [data, setData] = useState<Resp>({} as Resp);
    const [loading, setLoading] = useState(true);
    const section = queryObj.section;
    const pageSize = queryObj.pageSize;
    const showFields = queryObj.showFields;
    const page = queryObj.page || 1;
    const q = useQuery().get('q')
    const order = useQuery().get('order')

    useEffect(() => {
        // I use CancelToken to cancel pending request in unmounting phase 
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        async function fetchData() {
            try {
                setLoading(true);
                const data = await getData(
                    baseUrl,
                    {
                        section,
                        q,
                        page,
                        "order-by": order || "newest",
                        "page-size": pageSize,
                        "show-fields": showFields,
                    },
                    source.token
                );
                setData(data as Resp);
            } catch (error) {
                setData({results: []} as Resp);
                console.log("error :: ", error);
            } finally {
                setLoading(false)
            }
        }
        fetchData();

        return () => {
            // cancel request in unmounting phase
            source.cancel('Operation canceled by the user.')
        }
    }, [baseUrl, section, pageSize, showFields, q, order, page]);

    return { data, loading };
}

export default useGetData;