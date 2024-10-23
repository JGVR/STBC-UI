import {View, FlatList} from 'react-native';
import {styled} from 'nativewind';
import VideoComp from './Video';

const StyledView = styled(View);

export default function VideosList(props: {data: any[], imageLayout: string, containerLayout: string, titleLayout: string, descriptionLayout: string, isDynamicScreen: boolean}){
    return(
        <StyledView className={props.containerLayout}>
            <FlatList
                data={props.data}
                horizontal={true}
                renderItem={({item}) => !item ? null : <VideoComp videoItm={item} imageLayout={props.imageLayout} titleLayout={props.titleLayout} descriptionLayout={props.descriptionLayout} isDynamicScreen={props.isDynamicScreen}/>}
                />
        </StyledView>
    );
}