import { ReactComponent as SearchIcon } from "../../assets/search-icon@2x.svg";
import debounce from "../../utils/debounce";
import { Container, Icon, Input } from "./styledComponents";

const SearchBox = () => {

  const search = () => {
    console.log(99)
  }

  return (
    <Container>
      <Input placeholder="Search all news" onChange={(e) => debounce(search, 400)(e.target.value)} />
      <Icon>
        <SearchIcon
          width="20px"
          height="20px"
          stroke="black"
          onClick={() => {

          }}
        />
      </Icon>
    </Container>
  )
}

export default SearchBox;