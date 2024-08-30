import {ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { useEffect, useState } from 'react';

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
            height: "h-48",
            border: "",
            top: "",
            bottom: "",
            left: "left-[55%]",
            right: "",
        },
        textLayout: {
            position: "absolute",
            top: "top-20",
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
    const [isCompleted, setIsCompleted] = useState(true);

    return(
        <StyledView className='h-full w-full bg-sky-950'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledView>
    );
}