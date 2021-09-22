import Section from "./Section";

const sections = [
    {
        label: "Sport",
        value: "sport"
    },
    {
        label: "Culture",
        value: "culture"
    },
    {
        label: "Life and style",
        value: "lifeandstyle"
    }
]

const NewsSections = () => {

    return <>
        {sections.map(s => <Section key={s.value} sectionDetail={s} />)}
    </>
};

export default NewsSections;