import { useState, memo, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { ReactComponent as SearchIcon } from "../../assets/search-icon@2x.svg";
import debounce from "../../utils/debounce";
import { Container, Icon, Input } from "./styledComponents";
import useSetQueryString from "../../hooks/useSetQueryString";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();
  console.log("location :: ", location)
  useSetQueryString("q", query, location.pathname !== "/search-result" && location.search ? "/search-result" : "" );

  const search = (value: string) => {
    setQuery(value);
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

export default memo(SearchBox);