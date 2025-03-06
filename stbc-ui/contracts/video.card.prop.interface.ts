import Video from "@/model/Video"

export default interface IVideoCardProps {
    videoData: Video,
    isDynamicScreen: boolean,
    imageLayout: string,
    titleLayout: string,
    descriptionLayout: string
}