export type CardItem = {
    id: string;
    type: string;
    webTitle: string;
    apiUrl: string;
    fields: {
        headline: string;
        thumbnail: string;
        trailText: string;
        body: string;
        firstPublicationDate: string;
    }
}