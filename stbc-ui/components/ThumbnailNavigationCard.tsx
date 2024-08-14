import {View} from 'react-native';
import ImageButton from '@/components/ImageButton';


export default function ThumbnailNavigationCard(props: {title: string, imageDetail: any}){
    return (
        <View>
            <ImageButton title={props.title} imageDetail={props.imageDetail}/>
        </View>
    );
}