import {ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';

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
        title: "Monday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/dailyDevotions/devotions",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Tuesday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/dailyDevotions/devotions",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Wednesday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/dailyDevotions/devotions",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Thursday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/dailyDevotions/devotions",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Friday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/dailyDevotions/devotions",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Saturday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Sunday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/dailyDevotions/devotions",
        imageLayout: {
            width: "w-80",
            height: "h-56",
            border: "border-1",
            top: "",
            bottom: "",
            left: "left-[50%]",
            right: "",
        },
        textLayout: {
            position: "absolute",
            top: "top-24",
            bottom: "",
            left: "left-[90%]",
            right: "",
            width: "w-26",
            height: "",
            textSize: "text-lg",
            textColor: "text-white"
        }
    }
]
const StyledView = styled(ScrollView);

export default function DailyDevotionsScreen(){
    return(
        <StyledView className='h-full w-full bg-gray-800'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledView>
    );
}