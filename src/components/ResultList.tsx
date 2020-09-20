import React, { useState } from 'react';
import { WikiSearchResult } from '../types';
import { ListItem } from './ListItem';
import { ListBox } from './Styles';


interface ResultListProps {
    resultList: WikiSearchResult[];
}

export const ResultList = (props: ResultListProps) => {
  const [ searchValue, setSearchValue ] = useState<string>("");

  const getList = () => {
    const JSXResults = props.resultList.map((result: WikiSearchResult, key: number) => {
        return (<ListItem key={key} title={result.title} content={result.snippet} />)
    })
    return JSXResults;
  }

  return (
      <ListBox>
          {getList()}
      </ListBox>
  );
}
