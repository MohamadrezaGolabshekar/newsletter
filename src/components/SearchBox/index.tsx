import { memo, useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search-icon@2x.svg";
import debounce from "../../utils/debounce";
import { Container, Icon, Input } from "./styledComponents";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const ref = useRef();
  const inputRef = useRef<HTMLInputElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const search = (query: string) => {
    const name = "q";
    const params = new URLSearchParams(location.search.substring(1));
    if (query) {
      params.delete(name);
      params.append(name, query);
    } else {
      params.delete(name);
    }
    if (location.pathname !== "/search-result" && query) {
      history.push(`${'/search-result'}?${params.toString()}`)
    } else {
      history.push({ search: params.toString() })
    }
  }

  // this will clear search input when user change page without clicking on links
  useEffect(() => {
    if (location.pathname !== "/search-result" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [location.pathname])

  return (
    <Container isOpen={isOpen} ref={ref}>
      <Input
        ref={inputRef}
        isOpen={isOpen}
        placeholder="Search all news"
        onChange={(e) => debounce(search, 400)(e.target.value)}
      />
      <Icon>
        <SearchIcon
          width="20px"
          height="20px"
          stroke="black"
          onClick={() => {
            setIsOpen(true);
            if (inputRef.current) {
              inputRef.current.focus();
              inputRef.current.value = "";
            }
          }}
        />
      </Icon>
    </Container>
  )
}

export default memo(SearchBox);