interface VideoStruct{
    id: string,
    title: string,
    description: string,
    thumbNailUrl: string,
    targetScreen?: string,
    speaker: string,
    date: string
}

export default class Video{
    id: string
    title: string
    description: string
    thumbNailUrl: string
    targetScreen?: string
    speaker: string
    date: string

    constructor({id, title, description, thumbNailUrl, speaker, targetScreen="", date}: VideoStruct){
        this.id=id
        this.title=title
        this.description=description
        this.thumbNailUrl=thumbNailUrl
        this.speaker=speaker
        this.date=date
        this.targetScreen=targetScreen
    }
}