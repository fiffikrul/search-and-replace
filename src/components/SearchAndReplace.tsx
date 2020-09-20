import React, { useEffect, useRef, useState } from 'react';
import { InputField } from './InputField';
import { Button, Icon, replaceAll, replaceOne, RowWrapper, SearchAndReplaceBox } from './Styles';


interface SearchAndReplaceProps {
  onReplace: (replacePhrase: string, replaceAll: boolean) => void;
  onSearch: (searchPhrase: string) => void;
}

export const SearchAndReplace = (props: SearchAndReplaceProps) => {
  const [ searchValue, setSearchValue ] = useState<string>("");
  const [ replaceValue, setReplaceValue ] = useState<string>("");
  const typeTimeout = useRef(0);

  const handleValidatedSearch = (searchPhrase: string) => {
    if (searchPhrase) {
      props.onSearch(searchPhrase);
    }
  }

  const handleSearch = () => {
    clearTimeout(typeTimeout.current)
    handleValidatedSearch(searchValue);
  }

  useEffect(() => {
    typeTimeout.current = setTimeout(() => {
      handleValidatedSearch(searchValue);
    }, 3000)
    return () => clearTimeout(typeTimeout.current)
  }, [ searchValue ]);


  return (
    <>
        <SearchAndReplaceBox>
          <RowWrapper>
            <InputField value={searchValue} placeholder="Find" onChange={setSearchValue}/>
            <Button onClick={() => handleSearch()}>search</Button>
          </RowWrapper>
          <RowWrapper>
            <InputField value={replaceValue} placeholder="Replace" onChange={setReplaceValue}/>
            <Button className="replace" onClick={() => props.onReplace(replaceValue, false)}><Icon src={replaceOne}/></Button>
            <Button className="replace" onClick={() => props.onReplace(replaceValue, true)}><Icon src={replaceAll}/></Button>
          </RowWrapper>
        </SearchAndReplaceBox>
    </>
  );
}
