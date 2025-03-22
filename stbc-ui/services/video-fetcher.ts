import IFetcher from "@/contracts/fetcher.interface";
import IVideo from "@/contracts/video.interface";
import Video from "@/model/Video";

export default class VideoFetcher implements IFetcher<Video>{

    async call(source: string, max: number = 0, skip: number = 0): Promise<Array<Video>>{
        try{
            //fetch data from source
            const resp = await fetch(source);

            //Check if any errors in response
            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            //extract data as json
            const data = await resp.json();

            //convert data to an array of Video objects
            const videos = data.map((video: any) => {
                let newVideo: Video | null = null;
                newVideo = new Video({
                    id: "1", //Needs to change once API has been tweaked
                    title: video["title"],
                    channelUrl: "https://www.youtube.com/watch?v=PLpB4BrBVkY", //Needs to change once API has been tweaked
                    thumbNailUrl: "https://stbc.blob.core.windows.net/stbc-mobile-app-images/sunday-nag-car-img.webp", //Needs to change once API has been tweaked,
                    speakerId: video["speaker"],
                    targetScreen: "media",
                    topics: video["topics"] ? video["topics"] : []
                });
                return newVideo;
            });

            return videos;
        }catch(error){
            console.log(`Something went wrong ${error}`);
            throw new Error("Something failed!")
        }
    }
}