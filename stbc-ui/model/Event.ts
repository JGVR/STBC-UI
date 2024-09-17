interface EventStruct{
    title: string,
    description?: string,
    startDate?: string,
    endDate?: string,
    eventUrl?: string,
    imageUrl: string,
    location?: string
}

export default class Event{
    title: string
    description: string
    startDate: string
    endDate: string
    eventUrl: string
    imageUrl: string
    location: string

    constructor({title, description="", startDate="", endDate="", eventUrl="", imageUrl, location=""}: EventStruct){
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.eventUrl = eventUrl;
        this.imageUrl = imageUrl;
        this.location = location;
    }
}