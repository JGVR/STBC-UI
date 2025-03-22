import {View, ScrollView, StatusBar} from 'react-native';
import { styled } from 'nativewind';
import { useFocusEffect } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import Video from '@/model/Video';
import YoutubeChannel from '@/model/YoutubeChannel';
import LoadingScreen from '@/components/loadingScreen';
import VideosList from '@/components/VideosList';
import SectionHeader from '@/components/SectionHeader';
import VideoFetcher from '@/services/video-fetcher';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);

const videoImgLayout = "h-14 w-24 rounded-lg mb-4";
const videoTitleLayout = "h-5 text-white mb-1";
const videoDescLayout = "h-5 text-white";
const videoListContainerLayout = "h-[40%] w-full";

export default function MediaScreen(){
    const channel = new YoutubeChannel({id:process.env.EXPO_PUBLIC_STBC_CHANNEL_ID, url: process.env.EXPO_PUBLIC_YOUTUBE_API});
    const [recentVideos, setRecentVideos] = useState<Array<Video>>([]);
    const [lastMonthVideos, setLastMonthVideos] = useState<Array<Video>>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const fetcher = new VideoFetcher();

    //fetch videos function
    const fetchVideos = async(url: string) => {
        return await fetcher.call(url);
    };

    //Extract last 5 STBC services
    const fetchRecentVideos = async() => {
        try{
            //`${process.env.EXPO_PUBLIC_STBC_API}type=event&churchId=1&maxDocs=${maxDocs}&recordId=${newDocNum}`
            //`${channel.url}&channelId=${channel.id}&maxResults=${5}&order=date&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`
            const videos = await fetchVideos(`${process.env.EXPO_PUBLIC_STBC_API}type=sermon&churchId=1&maxDocs=${10}`);
            setRecentVideos(prevData => [...prevData, ...videos]);
            setIsCompleted(true);
        }catch(error){
            console.log(`Something went wrong ${error}`)
        }
    };

    //Extract 5 lastest STBC services from last month
    const fetchLastMonthVideos = async() => {
        //const today = new Date();
        //today.setUTCHours(0,0,0,0) //default time to midnight
        //today.setMonth(today.getMonth() - 1); //substract a month from today's date
        //const lastMonth = today.toISOString();
        //`${channel.url}&channelId=${channel.id}&maxResults=4&order=date&publishedBefore=${lastMonth}&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`
        const videos = await fetchVideos(`${process.env.EXPO_PUBLIC_STBC_API}type=sermon&churchId=1&maxDocs=${10}`);
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

    if(isCompleted){
        return(
            <StyledScrollView className='bg-midnight-green h-full w-full'>
                {/*Recently Added Section*/}
                <SectionHeader title='Recently Added' containerLayout='flex-row flex-nowrap' titleLayout='text-xl text-white mt-4 ml-4 font-bold italic' iconLayout='mt-4'/>
                <VideosList data={recentVideos} imageLayout={videoImgLayout} titleLayout={videoTitleLayout} descriptionLayout={videoDescLayout} containerLayout={videoListContainerLayout} isDynamicScreen={true}/>

                {/*Last Month Section*/}
                <SectionHeader title='Last Month' containerLayout='flex-row flex-nowrap' titleLayout='text-xl text-white mt-5 ml-4 font-bold italic' iconLayout='mt-5'/>
                <VideosList data={lastMonthVideos} imageLayout={videoImgLayout} titleLayout={videoTitleLayout} descriptionLayout={videoDescLayout} containerLayout={videoListContainerLayout} isDynamicScreen={true}/>

                {/*Speaker Section*/}
                {/*Add code here*/}
            </StyledScrollView>
        );
    }
    return <LoadingScreen/>;
}