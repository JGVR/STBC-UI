import {View, Text, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import { useState, useEffect } from 'react';
import Video from '@/model/Video';
import YoutubeChannel from '@/model/YoutubeChannel';
import LoadingScreen from '@/components/loadingScreen';
import ItemsList from '@/components/ItemsList';
import VideoComp from '@/components/Video';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);

export default function MediaScreen(){
    const channel = new YoutubeChannel({id:process.env.EXPO_PUBLIC_STBC_CHANNEL_ID, url: process.env.EXPO_PUBLIC_YOUTUBE_API});
    const youtubeApiUrl = `${channel.url}&channelId=${channel.id}&maxResults=5&order=date&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`;
    const [videos, setVideos] = useState<Video[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const imgUrl = "https://stbc.blob.core.windows.net/stbc-mobile-app-images/STBC-Logo.png"

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
            <StyledScrollView className='bg-midnight-green h-full w-full'>
            </StyledScrollView>
        );
    }
    return <LoadingScreen/>;
}