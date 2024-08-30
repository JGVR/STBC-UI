import {View} from 'react-native';
import ImageButton from '@/components/ImageButton';
import {styled} from  'nativewind';

const StyledView = styled(View);

export default function ThumbnailNavigationCard(props: {navigationCards: {title: string, imageDetail: any, screenUrl: string, imageLayout: {width: string, height: string, border: string, top: string, bottom: string, left: string, right: string}, textLayout: {width: string, height: string, position: string, top: string, bottom: string, right: string, left: string, textSize: string, textColor:string}, isCompleted: boolean}[]}){
    return(
        <StyledView className="flex-row flex-wrap justify-between mt-4">
            {
                props.navigationCards.map((card, index) => {
                    return(
                        <ImageButton key={index} title={card.title} imageDetail={card.imageDetail} screenUrl={card.screenUrl} imageLayout={card.imageLayout} textLayout={card.textLayout} isCompleted={card.isCompleted}/>
                    );
                })
            }
        </StyledView>
    );
}