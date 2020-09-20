import React from 'react';
import { ParsedItem } from '../types';
import { ListItem } from './ListItem';
import { ListBox } from './Styles';


interface ResultListProps {
    resultList: ParsedItem[];
}

export const ResultList = (props: ResultListProps) => {

  const getList = () => {
    const JSXResults = props.resultList.map((result: ParsedItem, key: number) => {
        return (<ListItem key={key} title={result.title} content={result.content} />)
    })
    return JSXResults;
  }

  return (
      <ListBox>
          {getList()}
      </ListBox>
  );
}
