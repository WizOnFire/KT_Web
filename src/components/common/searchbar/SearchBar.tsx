import { useState } from "react";
import Button from "../button/Button";
import { Input, TSearchBar, SearchIcon } from "./SearchBarStyles";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({containerWidth, height, lineHeight, buttonWidth, placeholder,onSearch}:TSearchBar) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
    console.log(searchTerm);
    setSearchTerm("")
  }

  return (
    <form onSubmit={onSubmit} style={{display:'flex'}}> 
      <Input type="text" placeholder={placeholder} value={searchTerm} onChange={handleInputChange} width={containerWidth} height={height} lineHeight={lineHeight}/>
      <Button type="submit" width={buttonWidth} height={height} border="none" hoverColor="none" backgroundColor="transparent" fontColor="#fff" fontSize="12px" margin="0 0 0 -3px" padding="0" >
        <SearchIcon>
          <IoSearch color="black"/>
        </SearchIcon>
      </Button>
    </form>
  );
}
export default SearchBar