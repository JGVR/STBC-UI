import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView, View } from 'react-native';
import {styled} from 'nativewind';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const navigationCards = [
        {
            title: "First Time Visitor",
            imageDetail: require('@/assets/getPluggedIn.png')
        },
        {
            title: "How To Be Saved",
            imageDetail: require('@/assets/HowToBeSaved.png')
        },
        {
            title: "Live",
            imageDetail: require('@/assets/give.png')
        },
        {
            title: "Daily Devotions",
            imageDetail: require('@/assets/calendar.png')
        },
        {
            title: "About",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "Contact Us",
            imageDetail: require('@/assets/icon.png')
        },
    ];

    return (
        <StyledScrollView className='h-full w-full bg-gray-800'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
            <YoutubeVideoPlayer/>
        </StyledScrollView>
    );
}