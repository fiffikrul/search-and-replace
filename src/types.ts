export interface WikiSearchResult {
    ns: number;
    pageid: number;
    size: number;
    snippet: string;
    timestamp: string;
    title: string;
    wordcount: number;
}

export interface WikiSearchParsed {
    title: string;
    content: JSX.Element | JSX.Element[];
}

interface WikiQuery {
    search: WikiSearchResult[]
}

export interface WikiResponse {
    batchcomplete: string;
    continue: any;
    query: WikiQuery;
}

export interface ParsedItem {
    title: string;
    content: JSX.Element | JSX.Element[] | string;
}