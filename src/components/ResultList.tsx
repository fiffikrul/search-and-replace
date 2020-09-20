import React, { useState } from 'react';
import { WikiSearchResult } from '../types';
import { ListBox, ListItem } from './Styles';


interface ResultListProps {
    resultList: WikiSearchResult[];
}

export const ResultList = (props: ResultListProps) => {
  const [ searchValue, setSearchValue ] = useState<string>("");

  const getList = () => {
    const JSXResults = props.resultList.map((result: WikiSearchResult) => {
        return (<ListItem>{result.snippet}</ListItem>)
    })
    return JSXResults[0];
  }

  return (
      <ListBox>
          {getList()}
      </ListBox>
  );
}
