import { IoSearchCircle } from 'react-icons/io5';
import styled from 'styled-components';

function SearchBar() {
  return (
    <>
      <SearchBarInput placeholder="무엇을 배우고 싶으세요?" type="text" />
      <IoSearchCircle size={35} style={{}} />
    </>
  );
}

export default SearchBar;

const SearchBarInput = styled.input`
  border-radius: 20px;
  border: none;
  background-color: #f7f7fa;
  width: 250px;
  height: 40px;
  padding: 0 20px;
  :focus {
    outline: none;
  }
`;
