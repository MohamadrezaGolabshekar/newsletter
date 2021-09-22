import axios from 'axios';
import { useEffect, useState } from 'react';
import getData, { QueryObj } from "../utils/getData";

type Resp = {
    results: any[];
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

    useEffect(() => {
        // I use CancelToken to cancel pending request in unmounting phase 
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        async function fetchData() {
            try {
                const data = await getData(
                    baseUrl,
                    {
                        section,
                        "page-size": pageSize,
                        "show-fields": showFields
                    },
                    source.token
                );
                setData(data as Resp);
            } catch (error) {
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
    }, [baseUrl, section, pageSize, showFields]);

    return { data, loading };
}

export default useGetData;