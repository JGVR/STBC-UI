import {View} from 'react-native';
import ImageButton from '@/components/ImageButton';
import {styled} from  'nativewind';

const StyledView = styled(View);

export default function ThumbnailNavigationCard(props: {title: string, imageDetail: any}){
    return (
        <StyledView className="w-1/2 p-4">
            <ImageButton title={props.title} imageDetail={props.imageDetail}/>
        </StyledView>
    );
}