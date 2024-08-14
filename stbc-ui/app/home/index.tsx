import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView, View } from 'react-native';
import {styled} from 'nativewind';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView);
    const navigationCards = [
        {
            title: "Home",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "Detail",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "Detail2",
            imageDetail: require('@/assets/icon.png')
        },
    ];

    return (
        <StyledScrollView className='h-full w-full bg-gray-700'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledScrollView>
    );
}