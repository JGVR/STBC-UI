interface VideoStruct{
    id: string,
    title: string,
    description: string,
    thumbNailUrl: string,
    speaker: string
}

export default class Video{
    id: string
    title: string
    description: string
    thumbNailUrl: string
    speaker: string

    constructor({id, title, description, thumbNailUrl, speaker}: VideoStruct){
        this.id=id
        this.title=title
        this.description=description
        this.thumbNailUrl=thumbNailUrl
        this.speaker=speaker
    }
}