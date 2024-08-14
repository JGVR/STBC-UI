import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView } from 'react-native';
import {styled} from 'nativewind';

export default function HomeScreen(){
    const StyledScrollView = styled(ScrollView)
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
            title: "Test",
            imageDetail: require('@/assets/icon.png')
        }
    ]

    return (
        <StyledScrollView>
            {
                navigationCards.map((card, index) => {
                    return (
                        <ThumbnailNavigationCard key={index} title={card.title} imageDetail={card.imageDetail}/>
                    );
                })
            }
        </StyledScrollView>
    );
}