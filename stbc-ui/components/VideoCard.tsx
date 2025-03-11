import IVideoCardProps from "@/contracts/video.card.prop.interface";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import {styled} from 'nativewind';
import { View, Image, Text} from "react-native";
import { useEffect } from "react";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function VideoCard({videoData, isDynamicScreen, imageLayout, titleLayout, descriptionLayout}: IVideoCardProps){

    if(videoData.speaker){
        return (
            <Link href={{
                pathname: isDynamicScreen ? `${videoData.targetScreen}/${videoData.title.slice(0,5)}` : `${videoData.targetScreen}`,
                params: {data: JSON.stringify(videoData)}
            }} asChild>
                <Pressable>
                    <StyledView className="h-96 w-72 flex flex-col ml-2 mr-2 mt-2 overflow-hidden rounded-xl bg-dark-green">
                        <StyledImage className='h-56 w-full' src="https://i.ytimg.com/vi/VZ_PtLdpR9A/mqdefault.jpg"/>
                        <StyledText className='mt-2 ml-3 text-base text-white font-bold italic'>
                            {videoData.title}
                        </StyledText>
                        <StyledText className='w-48 ml-3 mt-4 text-sm text-white italic' numberOfLines={1}>
                            {videoData.speaker}
                        </StyledText>
                        <StyledText className='w-48 ml-3 mt-1 text-sm text-white italic' numberOfLines={1}>
                            {videoData.description}
                        </StyledText>
                    </StyledView>
                </Pressable>
            </Link>
        )
    }

    return(
        <Link href={{
            pathname: isDynamicScreen ? `${videoData.targetScreen}/${videoData.title.slice(0,5)}` : `/${videoData.targetScreen}`,
            params: {data: JSON.stringify(videoData)}
        }} asChild>
            <Pressable>
                <StyledView className='h-96 w-60 flex flex-col mr-2'>
                    <StyledImage className='h-32 w-56 mt-5 ml-3 rounded-2xl border-2' src="https://i.ytimg.com/vi/VZ_PtLdpR9A/mqdefault.jpg" resizeMode='contain'/>
                    <StyledText className='w-48 mt-2 ml-4 text-base text-white font-bold italic'>{videoData.title}</StyledText>
                </StyledView>
            </Pressable>
        </Link>
    )
}