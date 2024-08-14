import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView, View } from 'react-native';
import {styled} from 'nativewind';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const navigationCards = [
        {
            title: "First Time Visitor",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "How To Be Saved",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "Live",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "Daily Devotions",
            imageDetail: require('@/assets/icon.png')
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
        <StyledScrollView className='h-full w-full bg-gray-700'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledScrollView>
    );
}