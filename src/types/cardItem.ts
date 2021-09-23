export type CardItem = {
    id: string;
    type: string;
    webTitle: string;
    apiUrl: string;
    webPublicationDate: string;
    fields: {
        headline: string;
        thumbnail: string;
        trailText: string;
        body: string;
        bodyText: string;
        firstPublicationDate: string;
    }
}