interface MinistryStruct{
    name: string,
    description?: string,
    imageUrl: string,
    registerUrl: string
};

export default class Ministry{
    name: string
    description: string
    imageUrl: string
    registerUrl: string

    constructor({name, description="", imageUrl="", registerUrl=""}: MinistryStruct){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.registerUrl = registerUrl;
    }
}