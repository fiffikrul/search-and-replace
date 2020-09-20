import React, { useState } from 'react';
import parse from 'html-react-parser';
import { getSearchResultPromise } from '../api/APIUtils';
import { ResultList } from './ResultList';
import { FindAndReplace } from './FindAndReplace';
import { ParsedItem, WikiSearchResult } from '../types';
import { restoreHighlights } from '../utils/functions';
import { MainWrapper } from './Styles';

export const SearchAndList = () => {
  const [ parsedResponse, setParsedResponse ] = useState<ParsedItem[]>([]);
  const [ searchPhrase, setSearchPhrase ] = useState<string>("");
  
  const parseResponse = (response: WikiSearchResult[]) => {
    const parsedResponse: ParsedItem[] = response.map((responseElement: WikiSearchResult) => {
      const parsedContent: JSX.Element | JSX.Element[] = parse(responseElement.snippet); 
      return { title: responseElement.title, content: parsedContent };
    });
    return parsedResponse;
  }

  const handleReplace = (replacePhrase: string, replaceAll: boolean) => {
    const newParsedResponse = [...parsedResponse];
    for (let i = 0; i < parsedResponse.length; i++) {
      const result = parsedResponse[i];
      if (Array.isArray(result.content)) {
        const stringArray = result.content.map((element: JSX.Element) => {
            return element.props ? element.props.children : element;
        });
        const simpleString = stringArray.join("");
        const regExp = new RegExp(searchPhrase, "ig");
        if (regExp.test(searchPhrase)) {
          if (replaceAll) {
            const newString = simpleString.replace(regExp, replacePhrase);
            newParsedResponse[i] = { title: newParsedResponse[i].title, content: newString };
          } else {
            const indexOfFirst = simpleString.toLowerCase().indexOf(searchPhrase.toLowerCase());
            const firstOccurrence = simpleString.substr(indexOfFirst, searchPhrase.length);
            const newString = simpleString.replace(firstOccurrence, replacePhrase);
            const newStringWithHighlights = restoreHighlights(searchPhrase, newString)
            newParsedResponse[i] = { title: newParsedResponse[i].title, content: newStringWithHighlights };
            break;
          }
        };
      }
    }
    setParsedResponse(newParsedResponse);
  }

  async function getSearchResult(searchPhrase: string) {
    const result = await getSearchResultPromise(searchPhrase);
    if (result && result.query) {
      setParsedResponse(parseResponse(result.query.search));
    }
  }

  const handleSearch = (phrase: string) => {
    setSearchPhrase(phrase);
    getSearchResult(phrase);
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainWrapper>
          <FindAndReplace onSearch={handleSearch} onReplace={handleReplace} />
          <ResultList resultList={parsedResponse}/>
        </MainWrapper>
      </header>
    </div>
  );
}