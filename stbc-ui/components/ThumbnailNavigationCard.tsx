import {View} from 'react-native';
import ImageButton from '@/components/ImageButton';
import {styled} from  'nativewind';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);

export default function ThumbnailNavigationCard(props: {navigationCards: {title: string, imageDetail: any, url: string, isOutgoingUrl: boolean, imageLayout: ComponentLayout, textLayout: ComponentLayout}[]}){
    return(
        <StyledView className="flex-row flex-wrap justify-between mt-4">
            {
                props.navigationCards.map((card, index) => {
                    return(
                        <ImageButton key={index} data={null} title={card.title} imageDetail={card.imageDetail} url={card.url} imageLayout={card.imageLayout} textLayout={card.textLayout} isOutgoingUrl={card.isOutgoingUrl}/>
                    );
                })
            }
        </StyledView>
    );
}