export default class Devotion{
    title: string;
    message: string;
    author: string;
    dateOfWeek: string;

    constructor(title:string, message:string, author:string, dateOfWeek:string){
        this.title = title;
        this.message = message;
        this.author = author;
        this.dateOfWeek = dateOfWeek;
    }
}