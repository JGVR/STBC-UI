import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView} from 'react-native';
import {styled} from 'nativewind';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const imageLayout = {
        width: "w-48",
        height: "h-48",
        border: "",
        top: "",
        bottom: "",
        left: "",
        right: "",
    }
    const textLayout = {
        position: "absolute",
        top: "top-20",
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
            textLayout: textLayout,
            isCompleted: true
        },
        {
            title: "How To Be Saved",
            imageDetail: require('@/assets/HowToBeSaved.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isCompleted: true
        },
        {
            title: "Live",
            imageDetail: require('@/assets/give.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isCompleted: true
        },
        {
            title: "Daily Devotions",
            imageDetail: require('@/assets/calendar.png'),
            screenUrl: "/home/dailyDevotions",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isCompleted: false
        },
        {
            title: "About",
            imageDetail: require('@/assets/icon.png'),
            screenUrl: "/home/about",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isCompleted: true
        },
        {
            title: "Contact Us",
            imageDetail: require('@/assets/icon.png'),
            screenUrl: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isCompleted: false
        },
    ];

    return (
        <StyledScrollView className='h-full w-full bg-sky-950'>
            <YoutubeVideoPlayer/>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledScrollView>
    );
}