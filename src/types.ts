export interface WikiSearchResult {
    ns: number;
    pageid: number;
    size: number;
    snippet: string;
    timestamp: string;
    title: string;
    wordcount: number;
}

interface WikiQuery {
    search: WikiSearchResult[]
}

export interface WikiResponse {
    batchcomplete: string;
    continue: any;
    query: WikiQuery;
}