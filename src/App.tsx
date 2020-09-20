import React, { useEffect, useState } from 'react';
import { getSearchResultPromise } from './api/APIUtils';
import './App.css';
import { ResultList } from './components/ResultList';
import { SearchAndReplace } from './components/SearchAndReplace';
import { WikiSearchResult } from './types';


const App = () => {
  const [ responseState, setResponseState ] = useState<WikiSearchResult[]>([]);

  async function getSearchResult(searchPhrase: string) {
    const result = await getSearchResultPromise(searchPhrase);
    if (typeof result !== "undefined" && result.query) {
      setResponseState(result.query.search);
    }
  }

  const handleSearch = (phrase: string) => {
    getSearchResult(phrase);
  }

  useEffect(() => {
    console.log(responseState);
  }, [responseState])

  const handleReplace = (phrase: string, replaceAll: boolean) => {
    console.log(phrase);
    console.log(replaceAll)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchAndReplace onSearch={handleSearch} onReplace={handleReplace} />
        <ResultList resultList={responseState}/>
      </header>
    </div>
  );
}

export default App;
