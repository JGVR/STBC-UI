export default interface IVideo{
    id: string,
    title: string,
    channelUrl: string,
    thumbNailUrl: string,
    targetScreen?: string,
    speakerId: string,
    topics?: Array<string>
}