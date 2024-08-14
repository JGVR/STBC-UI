import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import { ScrollView, View, Text } from 'react-native';
import {styled} from 'nativewind';

export default function HomeScreen(){
    const StyledView = styled(View);
    const StyledText = styled(Text);

    const navigationCards = [
        {
            title: "Home",
            imageDetail: require('@/assets/icon.png')
        },
        {
            title: "Detail",
            imageDetail: require('@/assets/icon.png')
        }
    ];

    return (
        <ScrollView>
            <StyledView className="flex-1 flex-wrap flex-row justify-between">
                {
                    navigationCards.map((card, index) => {
                        return (
                            <ThumbnailNavigationCard key={index} title={card.title} imageDetail={card.imageDetail}/>
                        );
                    })
                }
            </StyledView>
        </ScrollView>
    );
}