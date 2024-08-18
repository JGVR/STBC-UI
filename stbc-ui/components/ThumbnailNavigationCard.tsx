import {View} from 'react-native';
import ImageButton from '@/components/ImageButton';
import {styled} from  'nativewind';

const StyledView = styled(View);

export default function ThumbnailNavigationCard(props: {navigationCards: {title: string, imageDetail: any, screenUrl: string}[]}){
    return(
        <StyledView className="flex-row flex-wrap justify-between mt-4">
            {
                props.navigationCards.map((card, index) => {
                    return(
                        <ImageButton key={index} title={card.title} imageDetail={card.imageDetail} screenUrl={card.screenUrl}/>
                    );
                })
            }
        </StyledView>
    );
}