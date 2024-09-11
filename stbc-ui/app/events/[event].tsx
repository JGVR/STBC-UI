import {View, Text, Image, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ShareButton from '@/components/buttons/ShareButton';
import CalendarButton from '@/components/buttons/CalendarButton';
import { useLocalSearchParams } from 'expo-router';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const imageUrl = require("@/assets/cross.jpeg");

export default function EventScreen(){
    const {title, description, eventUrl, location} = useLocalSearchParams();
    const url = Array.isArray(eventUrl) ? eventUrl[0] : eventUrl || '';  // Ensure eventUrl is treated as a string

    return(
        <StyledScrollView className='bg-dark-green h-full w-full'>
            <StyledImage className='h-60 w-96 mt-5 ml-5 mr-5 mb-1 rounded-2xl' source={imageUrl}/>
            <StyledView>
                <StyledText className='text-teal-400 text-2xl font-bold text-left ml-6'>{title}</StyledText>
                <StyledText className='text-teal-400 text-left ml-6'>Wed, Sep 4 • 6:30pm - 7:30pm</StyledText>
                <StyledView className='flex-row'>
                    <ShareButton url={url}/>
                    <CalendarButton/>
                </StyledView>
                <StyledText className='text-white text-lg mt-1 ml-5 mr-3 mb-2'>{description}</StyledText>
                {
                    location.length > 0 ?
                    <StyledView>
                        <StyledText className='text-teal-400 font-bold ml-5 mt-3 mb-1 text-lg'>Location:</StyledText>
                        <StyledText className='text-white ml-8'>{location}</StyledText>
                    </StyledView> : null
                }
                <StyledView>
                    <StyledText className='text-teal-400 font-bold ml-5 mt-3 mb-1 text-lg'>Contact:</StyledText>
                    <StyledText className='text-white ml-8'>•strongtowerbaptist@gmail.com</StyledText>
                </StyledView>
            </StyledView>
        </StyledScrollView>
    );
}