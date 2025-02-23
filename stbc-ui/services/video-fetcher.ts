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
            const videos = data["items"].map((video: any) => {
                //the description separates each section (speaker, sermon title) by ///
                const descData = video["snippet"]["description"].split("///");
                //Need to separate title by blank space to get the date of the sermon
                const titleData = video["snippet"]["title"].split(" ");
                let fullYear: number;
                let formattedDate: string | null = null;
                let newVideo: Video | null = null;

                //check if titleData is > 1
                if(titleData.length > 1){
                    //split the date into month, day, and year
                    const [month, day, year] = titleData[titleData.length-1].split("/").map(Number);
                    fullYear = Number(year) < 100 ? year + 2000 : year
                    formattedDate = new Date(fullYear, (month-1), day).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                   });

                   newVideo = new Video({
                    id: video["id"]["videoId"],
                    title: `${titleData[0]} - ${formattedDate}`,
                    description: descData[1],
                    thumbNailUrl: video["snippet"]["thumbnails"]["default"]["url"],
                    speaker: descData[1],//descData[3].replace(/,?\s*\.{3}/, ""),
                    targetScreen: "media"
                    });
                }else{
                    newVideo = new Video({
                        id: video["id"]["videoId"],
                        title: `${titleData[0]}`,
                        description: descData[1],
                        thumbNailUrl: video["snippet"]["thumbnails"]["default"]["url"],
                        speaker: descData[1],//descData[3].replace(/,?\s*\.{3}/, ""),
                        targetScreen: "media"
                    });
                }

                return newVideo;
            });

            return videos;
        }catch(error){
            console.log(`Something went wrong ${error}`);
            throw new Error("Something failed!")
        }
    }
}