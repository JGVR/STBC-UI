import {View, ScrollView, StatusBar} from 'react-native';
import { styled } from 'nativewind';
import { useFocusEffect } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import Video from '@/model/Video';
import YoutubeChannel from '@/model/YoutubeChannel';
import LoadingScreen from '@/components/loadingScreen';
import VideosList from '@/components/VideosList';
import SectionHeader from '@/components/SectionHeader';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);

const containerLayout = new ComponentLayout({height:"h-96", width:"w-full"});
const subContainerLayout = new ComponentLayout({height: "", width: ""});
const imageLayout = new ComponentLayout({height:"h-96", width:"w-full", opacity:"opacity-60"});
const titleLayout = new ComponentLayout({height:"", width:"", top: "-mt-28", size:"text-2xl", color:"text-white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:"", top:"", left:"ml-16", color: "text-white"});
const thumbnailLayout = new ComponentLayout({height:"h-48", width:"w-80", top:"-mt-72", left:"ml-56", border:"rounded-2xl border"});

const videoImgLayout = "h-14 w-24 rounded-lg mb-4";
const videoTitleLayout = "h-5 text-white mb-1";
const videoDescLayout = "h-5 text-white";
const videoListContainerLayout = "h-[23%] w-full";

export default function MediaScreen(){
    const channel = new YoutubeChannel({id:process.env.EXPO_PUBLIC_STBC_CHANNEL_ID, url: process.env.EXPO_PUBLIC_YOUTUBE_API});
    const [recentVideos, setRecentVideos] = useState<Video[]>([]);
    const [lastMonthVideos, setLastMonthVideos] = useState<Video[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    //fetch videos function
    const fetchVideos = async(url: string) => {
        try{
            const resp = await fetch(url);

            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = await resp.json();
            const videos = data["items"].map((video: any) => {
                const descData = video["snippet"]["description"].split("///");
                const title = video["snippet"]["title"].split(" ");
                const [month, day, year] = title[title.length-1].split("/").map(Number);
                const formattedDate = new Date((year + 2000), (month-1), day).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
               })

                const newVideo = new Video({
                    id: video["id"]["videoId"],
                    title: `${title[0]} - ${formattedDate}`,
                    description: descData[1],
                    thumbNailUrl: video["snippet"]["thumbnails"]["default"]["url"],
                    speaker: descData[1],//descData[3].replace(/,?\s*\.{3}/, ""),
                    targetScreen: "media"
                });
                return newVideo;
            });
            return videos;
        }catch(error){
            console.log(`Something went wrong ${error}`);
        }
    };

    //Extract last 5 STBC services
    const fetchRecentVideos = async() => {
        const videos = await fetchVideos(`${channel.url}&channelId=${channel.id}&maxResults=4&order=date&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`);
        setRecentVideos(prevData => [...prevData, ...videos]);
        setIsCompleted(true);
    };

    //Extract 5 lastest STBC services from last month
    const fetchLastMonthVideos = async() => {
        const today = new Date();
        today.setUTCHours(0,0,0,0) //default time to midnight
        today.setMonth(today.getMonth() - 1); //substract a month from today's date
        const videos = await fetchVideos(`${channel.url}&channelId=${channel.id}&maxResults=4&order=date&publishedBefore=${today.toISOString()}&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`);
        setLastMonthVideos(prevData => [...prevData, ...videos]);
    };

    useEffect(() => {
        if(!isCompleted){
            //Extract last 5 STBC services
            fetchRecentVideos();

            //Extract last 5 videos from previous month
            fetchLastMonthVideos();
        }
    }, []);

    //change status bar color
    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('light-content');
        }, [])
    );

    if(isCompleted){
        return(
            <StyledView>
                <StyledScrollView className='bg-midnight-green h-[100%] w-full'>
                    <StyledView className='h-96 w-full'>
                        <BgImageScreenHeader router={null} imageUrl="https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp" backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle={recentVideos[0].title} headerOptionalMsg={`${recentVideos[0].speaker}`} imageLayout={imageLayout} containerLayout={containerLayout} subContainerLayout={subContainerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout} thumbNailUrl='https://i.ytimg.com/vi/Wh-zXcFFIu8/mqdefault.jpg' thumbnailLayout={thumbnailLayout} imageButtonData={recentVideos[0]}/>
                    </StyledView>
                    <SectionHeader title='Recently Added' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-4 ml-4 font-bold italic' iconLayout='mt-5'/>
                    <VideosList data={recentVideos} imageLayout={videoImgLayout} titleLayout={videoTitleLayout} descriptionLayout={videoDescLayout} containerLayout={videoListContainerLayout} isDynamicScreen={true}/>
                    <SectionHeader title='Last Month' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-5 ml-4 font-bold italic' iconLayout='mt-6'/>
                    <VideosList data={lastMonthVideos} imageLayout={videoImgLayout} titleLayout={videoTitleLayout} descriptionLayout={videoDescLayout} containerLayout={videoListContainerLayout} isDynamicScreen={true}/>
                </StyledScrollView>
            </StyledView>
        );
    }
    return <LoadingScreen/>;
}