import axios from "axios";
import { WikiResponse } from "../types";

interface ResponseType {
    data: WikiResponse;
}

export const getSearchResultPromise = (searchPhrase: string) => {
    return new Promise<WikiResponse>(resolve => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${searchPhrase}&origin=*&srlimit=10`
        axios.get(url)
        .then((response: ResponseType) => {
            resolve(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    })
}