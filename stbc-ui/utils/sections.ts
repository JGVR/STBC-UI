export default class ScreenSection{
    header: {txt: string, size: string};
    subHeader: {txt: string, size: string} | null;
    description: {txt: string, size: string} | null;

    constructor(header: {txt: string, size: string}, subHeader: {txt: string, size: string} | null, description: {txt: string, size: string} | null){
        this.header = header;
        this.subHeader = subHeader;
        this.description = description;
    }
}