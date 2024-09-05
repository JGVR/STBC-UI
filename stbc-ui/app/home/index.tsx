import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView} from 'react-native';
import {styled} from 'nativewind';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import ComponentLayout from '@/utils/ComponentLayout';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const imageLayout = new ComponentLayout({height:"h-48", width:"w-48"});
    const textLayout = new ComponentLayout({height: "", width: "w-26", position: "absolute", top: "top-20", size: "text-lg", color: "text-white"});

    const navigationCards = [
        {
            title: "First Time Visitor",
            imageDetail: require('@/assets/getPluggedIn.png'),
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdoZK_3Zdw9EsiPCCVqHF8j9TYiCOVu4Dhfpb4qGQwiBCYfpw/viewform?pli=1",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: true
        },
        {
            title: "How To Be Saved",
            imageDetail: require('@/assets/HowToBeSaved.png'),
            url: "https://www.strongtowerbaptist.org/how-to-be-saved/",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: true
        },
        {
            title: "Live",
            imageDetail: require('@/assets/give.png'),
            url: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: false
        },
        {
            title: "Daily Devotions",
            imageDetail: require('@/assets/calendar.png'),
            url: "/home/dailyDevotions",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: false
        },
        {
            title: "About",
            imageDetail: require('@/assets/icon.png'),
            url: "/home/about",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: false
        },
        {
            title: "Contact Us",
            imageDetail: require('@/assets/icon.png'),
            url: "https://www.strongtowerbaptist.org/visit-us/",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: true
        }
    ];

    return (
        <StyledScrollView className='h-full w-full bg-dark-green'>
            <YoutubeVideoPlayer/>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledScrollView>
    );
}