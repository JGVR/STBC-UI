import {View, Text, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import { useState, useEffect } from 'react';
import Video from '@/model/Video';
import YoutubeChannel from '@/model/YoutubeChannel';
import LoadingScreen from '@/components/loadingScreen';
import VideosList from '@/components/VideosList';
import SectionHeader from '@/components/SectionHeader';

const StyledScrollView = styled(ScrollView);

const videoImgLayout = "h-14 w-24 rounded-lg mb-4";
const videoTitleLayout = "h-5 text-white mb-1";
const videoDescLayout = "h-5 text-white";
const videoListContainerLayout = "h-[37%] w-full";

export default function MediaScreen(){
    const channel = new YoutubeChannel({id:process.env.EXPO_PUBLIC_STBC_CHANNEL_ID, url: process.env.EXPO_PUBLIC_YOUTUBE_API});
    const [recentVideos, setRecentVideos] = useState<Video[]>([]);
    const [lastMonthVideos, setLastMonthVideos] = useState<Video[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const imgUrl = "https://stbc.blob.core.windows.net/stbc-mobile-app-images/STBC-Logo.png";

    //Extract last 5 STBC services
    const fetchRecentVideos = async() => {
        try{
            const resp = await fetch(`${channel.url}&channelId=${channel.id}&maxResults=4&order=date&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`);

            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = await resp.json();
            const videos = data["items"].map((video: any) => {
                const descData = video["snippet"]["description"].split("///");
                const dateStr = descData[1].replace(/.*(\d{2}\/\d{2}\/\d{2}).*/, "$1");
                const [month, day, year] = dateStr.split("/").map(Number);

                const newVideo = new Video({
                    id: video["id"]["videoId"],
                    title: descData[2].replaceAll("\"", ""),
                    description: descData[1],
                    thumbNailUrl: video["snippet"]["thumbnails"]["default"]["url"],
                    speaker: descData[3].replace(/,?\s*\.{3}/, ""),
                    date: new Date((year + 2000), (month-1), day).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                   }),
                    targetScreen: "media"
                });
                return newVideo;
            });
            setRecentVideos(prevData => [...prevData, ...videos]);
            setIsCompleted(true);
        }catch(error){
            console.log(`Something went wrong ${error}`);
        }
    };

    const fetchLastMonthVideos = async() => {
        try{
            const today = new Date();
            today.setUTCHours(0,0,0,0) //default time to midnight
            today.setMonth(today.getMonth() - 1); //substract a month from today's date
            const resp = await fetch(`${channel.url}&channelId=${channel.id}&maxResults=4&order=date&publishedBefore=${today.toISOString()}&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`);

            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = await resp.json();
            const videos = data["items"].map((video: any) => {
                const descData = video["snippet"]["description"].split("///");
                const dateStrMatch = descData[1].match(/\d{1,2}\/\d{1,2}\/\d{2}/);
                const dateStr = dateStrMatch ? dateStrMatch[0] : '';
                const [month, day, year] = dateStr.split("/").map(Number);

                const newVideo = new Video({
                    id: video["id"]["videoId"],
                    title: descData[2].replaceAll("\"", ""),
                    description: descData[1],
                    thumbNailUrl: video["snippet"]["thumbnails"]["default"]["url"],
                    speaker: descData[3].replace(/,?\s*\.{3}/, ""),
                    date: new Date((year + 2000), (month-1), day).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                   }),
                    targetScreen: "media"
                });
                return newVideo;
            });
            setLastMonthVideos(prevData => [...prevData, ...videos]);
            setIsCompleted(true);
        }catch(error){
            console.log(`Something went wrong ${error}`);
        }
    };

    useEffect(() => {
        if(!isCompleted){
            //Extract last 5 STBC services
            fetchRecentVideos();

            //Extract last 5 videos from previous month
            fetchLastMonthVideos();
        }
    }, [])

    if(isCompleted){
        return(
            <StyledScrollView className='bg-midnight-green h-full w-full'>
                <SectionHeader title='Recently Added' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-8 ml-4 font-bold italic' iconLayout='mt-9'/>
                <VideosList data={recentVideos} imageLayout={videoImgLayout} titleLayout={videoTitleLayout} descriptionLayout={videoDescLayout} containerLayout={videoListContainerLayout} isDynamicScreen={true}/>
                <SectionHeader title='Last Month' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-8 ml-4 font-bold italic' iconLayout='mt-9'/>
                <VideosList data={lastMonthVideos} imageLayout={videoImgLayout} titleLayout={videoTitleLayout} descriptionLayout={videoDescLayout} containerLayout={videoListContainerLayout} isDynamicScreen={true}/>
            </StyledScrollView>
        );
    }
    return <LoadingScreen/>;
}