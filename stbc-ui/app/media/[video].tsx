import {View, Text, StatusBar} from 'react-native';
import {styled} from 'nativewind';
import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import Video from '@/model/Video';
import GeneralScreenHeader from '@/components/headers/GeneralScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledText = styled(Text);

const iconLayout = new ComponentLayout({height:"", width:"", top:"top-14", left:"left-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-12", right:"right-[5%]", color: "white"});
const titleLayout = new ComponentLayout({height:"", width:""})
const mailIconLayout = new ComponentLayout({height:"", width:"", top:"top-3", left:"left-96", color:"white"});

export default function VideoScreen(){
    const {data} = useLocalSearchParams(); //{title, description, url, imageUrl, location, startDate, endDate}
    const video = typeof data === "string" ? JSON.parse(data) as Video : JSON.parse(data[0]) as Video;

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        return () => {
            StatusBar.setBarStyle('dark-content');
        }
    }, [])

    return(
        <StyledView className='bg-dark-green h-full w-full'>
            <GeneralScreenHeader title="" backButtonTitle="Media" titleLayout={titleLayout} backIconLayout={iconLayout} mailIconLayout={mailIconLayout} backButtonLayout={buttonLayout}/>
            <StyledView className='h-56 w-96 ml-5 top-6 border rounded-2xl overflow-hidden z-40'>
                <YoutubeVideoPlayer videoId={video?.id} height={300} containerStyle=''/>
            </StyledView>
            <StyledView className='bg-midnight-green h-[80%] w-full'>
                <StyledText className='text-white mt-12'>Hello!</StyledText>
            </StyledView>
        </StyledView>
    );
}