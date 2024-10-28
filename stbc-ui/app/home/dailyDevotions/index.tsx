import {ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import ComponentLayout from '@/utils/ComponentLayout';

const imageLayout = new ComponentLayout({height:"h-48", width:"w-48", opacity:"opacity-70", border:"border-slate-300 rounded-2xl border"});
const textLayout = new ComponentLayout({height: "", width: "w-26", position: "absolute", top: "top-20", size: "text-lg", color: "text-white"});

const navigationCards = [
    {
        title: "Monday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp',
        url: "/home/dailyDevotions/monday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Tuesday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp',
        url: "/home/dailyDevotions/tuesday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Wednesday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp',
        url: "/home/dailyDevotions/wednesday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Thursday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp',
        url: "/home/dailyDevotions/thursday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Friday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp',
        url: "/home/dailyDevotions/friday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Saturday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/monday-nag-car-img.webp',
        url: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Sunday",
        imageDetail: 'https://stbc.blob.core.windows.net/stbc-mobile-app-images/sunday-nag-car-img.webp',
        url: "/home/dailyDevotions/sunday",
        isOutgoingUrl: false,
        imageLayout: new ComponentLayout({height: "h-48", width: "w-80", left: "left-[55%]", opacity:"opacity-70", border:"border-slate-300 rounded-2xl border"}),
        textLayout: new ComponentLayout({height: "", width: "w-26", position: "absolute", top: "top-20", left: "left-[90%]", size: "text-lg", color: "text-white"})
    }
]
const StyledView = styled(ScrollView);

export default function DailyDevotionsScreen(){
    return(
        <StyledView className='h-full w-full bg-dark-green'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledView>
    );
}