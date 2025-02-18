import IEntity from "@/contracts/entity.interface"
import IVideo from "@/contracts/video.interface"


export default class Video implements IEntity{
    id: string
    title: string
    description: string
    thumbNailUrl: string
    targetScreen?: string
    speaker: string

    constructor({id, title, description, thumbNailUrl, speaker, targetScreen=""}: IVideo){
        this.id=id
        this.title=title
        this.description=description
        this.thumbNailUrl=thumbNailUrl
        this.speaker=speaker
        this.targetScreen=targetScreen
    }
}