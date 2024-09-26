interface MinistryStruct{
    id: string,
    name: string,
    description?: string,
    imageUrl: string,
    url: string,
    targetScreen?: string
    startDate?: string
    endDate?: string
};

export default class Ministry{
    id: string
    name: string
    description: string
    imageUrl: string
    url: string
    targetScreen: string
    startDate: string
    endDate: string

    constructor({id, name, description="", imageUrl="", url="", targetScreen="connect/ministries", startDate="", endDate=""}: MinistryStruct){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.url = url;
        this.targetScreen = targetScreen;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}