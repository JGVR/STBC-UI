import {View, Text, Image} from 'react-native';
import { styled } from 'nativewind';
import { useState, useEffect } from 'react';
import Video from '@/model/Video';
import YoutubeChannel from '@/model/YoutubeChannel';
import LoadingScreen from '@/components/loadingScreen';
import ItemsList from '@/components/ItemsList';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function MediaScreen(){
    const channel = new YoutubeChannel({id:process.env.EXPO_PUBLIC_STBC_CHANNEL_ID, url: process.env.EXPO_PUBLIC_YOUTUBE_API});
    const youtubeApiUrl = `${channel.url}&channelId=${channel.id}&maxResults=5&order=date&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`;
    const [videos, setVideos] = useState<Video[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const fetchVideos = async() => {
        try{
            const resp = await fetch(youtubeApiUrl);

            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = await resp.json();
            const videos = data["items"].map((video: any) => {
                const newVideo = new Video({
                    id: video["id"]["videoId"],
                    title: video["snippet"]["title"],
                    description: video["snippet"]["description"],
                    thumbNailUrl: video["snippet"]["thumbnails"]["default"]["url"]
                });
                return newVideo;
            });
            setVideos(prevData => [...prevData, ...videos]);
            setIsCompleted(true);
        }catch(error){
            console.log(`Something went wrong ${error}`);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, [])

    if(isCompleted){
        return(
            <StyledView>
                <StyledText>Hello!</StyledText>
            </StyledView>
        );
    }
    return <LoadingScreen/>;
}