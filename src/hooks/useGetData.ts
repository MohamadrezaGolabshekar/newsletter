import { useEffect, useState } from 'react';
import axios from 'axios';

type QueryObj = {
    section?: string;
    pageSize?: number;
    [key: string]: any;
}

type Resp = {
    results: any[];
}

const getData = (
    baseUrl = process.env.REACT_APP_BASE_API_URL,
    queryObj: QueryObj,
    cancelToken: any
) => {

    // here I change a query object to query string to join to our main api url
    let queryString = '';
    if (Object.keys(queryObj).length) {
        for (let i in queryObj) {
            queryString += `&${i}=${queryObj[i]}`;
        }
    }

    return new Promise((resolve, reject) => {
        const apiUrl = `${baseUrl}?api-key=${process.env.REACT_APP_API_KEY}&${queryString}`;
        console.log("apiUrl :: ", apiUrl)
        axios.get(apiUrl, { cancelToken })
            .then(response => {
                resolve(response.data.response);
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    reject(error);
                }
            });
    })
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

    useEffect(() => {
        // I use CancelToken to cancel pending request in unmounting phase 
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        async function fetchData() {
            try {
                const data = await getData(baseUrl, { section, "page-size": pageSize }, source.token);
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
    }, [section, pageSize]);

    return {data, loading};
}

export default useGetData;