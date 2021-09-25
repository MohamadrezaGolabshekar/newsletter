import { FC } from "react";
import useGetData from "../../hooks/useGetData";
import NewsCard from "../NewsCard";
import { SectionWrapper, Container, SectionTitle } from "./styledComponents";

type Props = {
    sectionDetail: {
        label: string;
        value: string;
    };
}

const Section: FC<Props> = ({ sectionDetail }) => {
    const SectionData = useGetData({
        section: sectionDetail.value,
        pageSize: 3,
        showFields: "headline,thumbnail,trailText,firstPublicationDate,bodyText"
    });

    return SectionData?.data?.results?.length > 0 ?
        <SectionWrapper>
            <SectionTitle>{sectionDetail.label}</SectionTitle>

            <Container>
                {SectionData.data.results.map(item => <NewsCard key={item.id} item={item} />)}
            </Container>
        </SectionWrapper> : null;
};

export default Section;