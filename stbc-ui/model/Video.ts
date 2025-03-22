import IEntity from "@/contracts/entity.interface"
import IVideo from "@/contracts/video.interface"


export default class Video implements IEntity{
    id: string
    title: string
    channelUrl: string
    thumbNailUrl: string
    targetScreen?: string
    speakerId: string
    topics?: Array<string>

    constructor({id, title, channelUrl, thumbNailUrl, speakerId, targetScreen="/media/video", topics}: IVideo){
        this.id=id
        this.title=title
        this.channelUrl=channelUrl
        this.thumbNailUrl=thumbNailUrl
        this.speakerId=speakerId
        this.targetScreen=targetScreen
        this.topics=topics
    }
}