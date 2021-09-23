import axios from 'axios';

export type QueryObj = {
    section?: string;
    pageSize?: number;
    [key: string]: any;
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

export default getData;