interface ChannelStruct{
    id: string,
    url: string
}

export default class YoutubeChannel{
    id: string
    url: string
    
    constructor({id, url}: ChannelStruct){
        this.id=id
        this.url=url
    }
}