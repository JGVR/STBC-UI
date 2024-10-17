interface EventStruct{
    id: string,
    title: string,
    description?: string,
    startDate?: string,
    endDate?: string,
    url?: string,
    targetScreen?: string
    imageUrl: string,
    location?: string
}

export default class Event{
    id: string
    title: string
    description: string
    startDate: string
    endDate: string
    url?: string
    targetScreen?: string
    imageUrl: string
    location?: string

    constructor({id, title, description="", startDate="", endDate="", url="", targetScreen="", imageUrl, location=""}: EventStruct){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.url = url;
        this.targetScreen = targetScreen;
        this.imageUrl = imageUrl;
        this.location = location;
    }
}