import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView} from 'react-native';
import {styled} from 'nativewind';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import { createContext } from 'react';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const imageLayout = {
        width: "w-full",
        height: "h-56",
        border: "border-1",
        top: "",
        bottom: "",
        left: "",
        right: "",
    }
    const textLayout = {
        position: "absolute",
        top: "top-24",
        bottom: "",
        left: "",
        right: "",
        width: "w-26",
        height: "",
        textSize: "text-lg",
        textColor: "text-white"
    }
    const navigationCards = [
        {
            title: "First Time Visitor",
            imageDetail: require('@/assets/getPluggedIn.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout
        },
        {
            title: "How To Be Saved",
            imageDetail: require('@/assets/HowToBeSaved.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout
        },
        {
            title: "Live",
            imageDetail: require('@/assets/give.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout
        },
        {
            title: "Daily Devotions",
            imageDetail: require('@/assets/calendar.png'),
            screenUrl: "/home/dailyDevotions",
            imageLayout: imageLayout,
            textLayout: textLayout
        },
        {
            title: "About",
            imageDetail: require('@/assets/icon.png'),
            screenUrl: "/home/about",
            imageLayout: imageLayout,
            textLayout: textLayout
        },
        {
            title: "Contact Us",
            imageDetail: require('@/assets/icon.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout
        },
    ];

    return (
        <StyledScrollView className='h-full w-full bg-gray-800'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
            <YoutubeVideoPlayer/>
        </StyledScrollView>
    );
}