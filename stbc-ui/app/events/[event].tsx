import {View, Text, Image, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ShareButton from '@/components/buttons/ShareButton';
import CalendarButton from '@/components/buttons/CalendarButton';
import { useLocalSearchParams } from 'expo-router';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function EventScreen(){
    const {title, description, url, imageUrl, location, startDate, endDate} = useLocalSearchParams();
    const eventUrl = Array.isArray(url) ? url[0] : url;  // Ensure eventUrl is treated as a string
    const sDate = typeof startDate === "string" ? new Date(startDate).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
   }) : "";
    const eDate = typeof endDate === "string" ? new Date(endDate).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
   }) : "";
   const imgUrl = typeof imageUrl === "string" ? imageUrl : "";

    return(
        <StyledScrollView className='bg-dark-green h-full w-full'>
            <StyledImage className='h-60 w-96 mt-5 ml-5 mr-5 mb-1 rounded-2xl' src={imgUrl}/>
            <StyledView>
                <StyledText className='text-teal-400 text-2xl font-bold text-left ml-6'>{title}</StyledText>
                <StyledText className='text-teal-400 text-left ml-6 text-xs'>{`${sDate} • ${eDate}`}</StyledText>
                <StyledView className='flex-row'>
                    <ShareButton url={eventUrl !== "" ? eventUrl : imgUrl}/>
                    <CalendarButton title={title} startDate={startDate} endDate={endDate} location={location}/>
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