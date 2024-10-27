import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView} from 'react-native';
import {styled} from 'nativewind';
import YoutubeVideoPlayer from '@/components/YoutubeVideoPlayer';
import ComponentLayout from '@/utils/ComponentLayout';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const imageLayout = new ComponentLayout({height:"h-48", width:"w-48", opacity:"opacity-70", border:"border-slate-300 rounded-2xl border"});
    const textLayout = new ComponentLayout({height: "", width: "w-26", position: "absolute", top: "top-20", size: "text-lg", color: "text-white"});

    const navigationCards = [
        {
            title: "First Time Visitor",
            imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/getPluggedIn.png',
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdoZK_3Zdw9EsiPCCVqHF8j9TYiCOVu4Dhfpb4qGQwiBCYfpw/viewform?pli=1",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: true
        },
        {
            title: "How To Be Saved",
            imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/HowToBeSaved.png',
            url: "https://www.strongtowerbaptist.org/how-to-be-saved/",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: true
        },
        {
            title: "Live",
            imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/give.png',
            url: "/home/howToBeSaved",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: false
        },
        {
            title: "Daily Devotions",
            imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/calendar.png',
            url: "/home/dailyDevotions",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: false
        },
        {
            title: "About",
            imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/give.png',
            url: "/home/about",
            imageLayout: imageLayout,
            textLayout: textLayout,
            isOutgoingUrl: false
        },
        {
            title: "Contact Us",
            imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/give.png',
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