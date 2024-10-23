interface VideoStruct{
    id: string,
    title: string,
    description: string,
    thumbNailUrl: string,
    targetScreen?: string
    //speaker: string
}

export default class Video{
    id: string
    title: string
    description: string
    thumbNailUrl: string
    targetScreen?: string
    //speaker: string

    constructor({id, title, description, thumbNailUrl, targetScreen=""}: VideoStruct){
        this.id=id
        this.title=title
        this.description=description
        this.thumbNailUrl=thumbNailUrl
        this.targetScreen=targetScreen
        //this.speaker=speaker
    }
}