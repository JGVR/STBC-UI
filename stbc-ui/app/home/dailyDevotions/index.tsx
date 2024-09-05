import {ScrollView, Text} from 'react-native';
import {styled} from 'nativewind';
import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import ComponentLayout from '@/utils/ComponentLayout';

const imageLayout = new ComponentLayout({height:"h-48", width:"w-48"});
const textLayout = new ComponentLayout({height: "", width: "w-26", position: "absolute", top: "top-20", size: "text-lg", color: "text-white"});

const navigationCards = [
    {
        title: "Monday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/dailyDevotions/monday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Tuesday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/dailyDevotions/tuesday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Wednesday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/dailyDevotions/wednesday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Thursday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/dailyDevotions/thursday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Friday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/dailyDevotions/friday",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Saturday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout,
        isOutgoingUrl: false
    },
    {
        title: "Sunday",
        imageDetail: require('@/assets/icon.png'),
        url: "/home/dailyDevotions/sunday",
        isOutgoingUrl: false,
        imageLayout: new ComponentLayout({height: "h-48", width: "w-80", left: "left-[55%]"}),
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