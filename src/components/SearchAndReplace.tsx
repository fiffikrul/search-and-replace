import React, { useEffect, useState } from 'react';
import { getSearchResultPromise } from '../api/APIUtils';
import { InputField } from './InputField';
import { WikiSearchResult } from '../types';
import { replaceAll, replaceOne, RowWrapper, SearchAndReplaceBox } from './Styles';
import { Button, Icon } from './Styles';


interface SearchAndReplaceProps {

}

export const SearchAndReplace = (props: SearchAndReplaceProps) => {
  const [ state, setState ] = useState<string>("");
  const [ state2, setState2 ] = useState<string>("");
  const [ responseState, setResponseState ] = useState<WikiSearchResult[]>([]);

  async function getSearchResult(searchPhrase: string) {
    const result = await getSearchResultPromise(searchPhrase);
    if (typeof result !== "undefined") {
      setResponseState(result.query.search);
    }
  }

  const handleButtonClick = () => {
    getSearchResult("liverpool")
  }

  useEffect(() => {
    console.log(responseState)
  }, [ responseState ])
  return (
    <>
        <SearchAndReplaceBox>
          <RowWrapper>
            <InputField value={state} placeholder="Find" onChange={setState}/>
            <Button onClick={handleButtonClick}>search</Button>
          </RowWrapper>
          <RowWrapper>
            <InputField value={state2} placeholder="Replace" onChange={setState2}/>
            <Button className="replace" onClick={handleButtonClick}><Icon src={replaceOne}/></Button>
            <Button className="replace" onClick={handleButtonClick}><Icon src={replaceAll}/></Button>
          </RowWrapper>
        </SearchAndReplaceBox>
    </>
  );
}
