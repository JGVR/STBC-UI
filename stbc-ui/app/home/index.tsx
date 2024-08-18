import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView, View } from 'react-native';
import {styled} from 'nativewind';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const navigationCards = [
        {
            title: "First Time Visitor",
            imageDetail: require('@/assets/getPluggedIn.png'),
            screenUrl: "/home/howToBeSaved"
        },
        {
            title: "How To Be Saved",
            imageDetail: require('@/assets/HowToBeSaved.png'),
            screenUrl: "/home/howToBeSaved"
        },
        {
            title: "Live",
            imageDetail: require('@/assets/give.png'),
            screenUrl: "/home/howToBeSaved"
        },
        {
            title: "Daily Devotions",
            imageDetail: require('@/assets/calendar.png'),
            screenUrl: "/home/howToBeSaved"
        },
        {
            title: "About",
            imageDetail: require('@/assets/icon.png'),
            screenUrl: "/home/about"
        },
        {
            title: "Contact Us",
            imageDetail: require('@/assets/icon.png'),
            screenUrl: "/home/howToBeSaved"
        },
    ];

    return (
        <StyledScrollView className='h-full w-full bg-gray-800'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
            <YoutubeVideoPlayer/>
        </StyledScrollView>
    );
}