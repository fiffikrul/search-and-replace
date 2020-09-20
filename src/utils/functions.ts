import parse from 'html-react-parser';

export const restoreHighlights = (searchPhrase: string, string: string) => {
    let newString = string;
    let isFound = 0;
    const stringList = [];
    while (isFound !== -1) {
        const indexOfFirst = newString.toLowerCase().indexOf(searchPhrase.toLowerCase());
        if (indexOfFirst !== -1 ) {
            const firstOccurrence = newString.substr(indexOfFirst, searchPhrase.length);
            stringList.push(newString.substring(0, indexOfFirst));
            stringList.push("<span class='searchmatch'>" + firstOccurrence + "</span>");
            newString = newString.substring(indexOfFirst + searchPhrase.length);
        } else {
            stringList.push(newString);
            isFound = -1;
        }
    }
    const joinedString = stringList.join("");
    return parse(joinedString);
}