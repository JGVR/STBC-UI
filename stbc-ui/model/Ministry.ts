interface MinistryStruct{
    name: string,
    description?: string,
    imageUrl: string,
    url: string
};

export default class Ministry{
    name: string
    description: string
    imageUrl: string
    url: string

    constructor({name, description="", imageUrl="", url=""}: MinistryStruct){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.url = url;
    }
}