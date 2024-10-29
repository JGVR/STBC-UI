import {View, Text, StatusBar} from 'react-native';
import {styled} from 'nativewind';
import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import Video from '@/model/Video';
import GeneralScreenHeader from '@/components/headers/GeneralScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';
import ShareButton from '@/components/buttons/ShareButton';
import GiveButton from '@/components/buttons/GiveButton';

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
    }, []);

    return(
        <StyledView className='bg-dark-green h-full w-full'>
            <GeneralScreenHeader title="" backButtonTitle="Media" titleLayout={titleLayout} backIconLayout={iconLayout} mailIconLayout={mailIconLayout} backButtonLayout={buttonLayout}/>
            <StyledView className='h-56 w-96 ml-5 top-6 border rounded-2xl overflow-hidden z-40'>
                <YoutubeVideoPlayer videoId={video?.id} height={300} width={400} containerStyle=''/>
            </StyledView>
            <StyledView className='bg-midnight-green h-[80%] w-full'>
                <StyledText className='text-white mt-9 ml-5 text-2xl font-bold italic'>{video.title}</StyledText>
                <StyledText className='text-white mt-1 ml-7 text-base'>{video.date}</StyledText>
                <StyledView className='flex-row'>
                    <ShareButton url={`https://www.youtube.com/watch?v=${video.id}`} containerStyle='h-12 w-12 ml-12 mt-6 mb-6 bg-white rounded-full' iconStyle='m-3' titleStyle='text-base text-white mt-2 text-center' iconSize={24}/>
                    <GiveButton url="https://www.strongtowerbaptist.org/give/" containerStyle='h-12 w-12 ml-12 mt-6 mb-6 bg-white rounded-full' iconStyle='m-3' titleStyle='text-base text-white mt-2 text-center' iconSize={24}/>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}