import { FC } from "react";
import useGetData from "../../hooks/useGetData";

type Props = {
    sectionName: string;
}

const Section: FC<Props> = ({sectionName}) => {
    const SectionData = useGetData({section: sectionName, pageSize: 3});
    console.log(sectionName, " => ", SectionData);

    return <h2>{sectionName}</h2>
};

export default Section;