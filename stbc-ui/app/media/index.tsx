import {View, Text, Image} from 'react-native';
import { styled } from 'nativewind';
import YoutubeChannel from '@/model/YoutubeChannel';
import { useState, useEffect } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function MediaScreen(){
    const channel = new YoutubeChannel({id:process.env.EXPO_PUBLIC_STBC_CHANNEL_ID, url: process.env.EXPO_PUBLIC_YOUTUBE_API});
    const youtubeApiUrl = `${channel.url}&channelId=${channel.id}&maxResults=5&order=date&key=${process.env.EXPO_PUBLIC_YOUTUBE_API_KEY}`;
    const [videos, setVideos] = useState([]);

    const fetchVideos = async() => {
        try{
            const resp = await fetch(youtubeApiUrl);

            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = await resp.json();
            console.log(data);
            console.log(data["items"][0]["id"]["videoId"]);

        }catch(error){
            console.log(`Something went wrong ${error}`);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, [])

    return(
        <StyledView>
            <StyledText>Hello!</StyledText>
        </StyledView>
    );
}