import {View, FlatList, ActivityIndicator} from 'react-native';
import {styled} from 'nativewind';
import Item from './Item';

const StyledView = styled(View);

export default function ItemsList(props: {data: any[], imageLayout: string, titleLayout: string, iconLayout: string, description: string, isDynamicScreen: boolean, isDynamicList: boolean, handleMoreData: any}){
    if(!props.isDynamicList)
    {
        return(
            <StyledView className="h-[85%] w-full">
                <FlatList
                    data={props.data}
                    renderItem={({item}) => <Item item={item} imageLayout={props.imageLayout} titleLayout={props.titleLayout} iconLayout={props.iconLayout} optionalMsgLayout={props.description} isDynamicScreen={props.isDynamicScreen}/>}
                    />
            </StyledView>
        );
    };
    return(
        <StyledView className="h-[85%] w-full">
            <FlatList
                data={props.data}
                renderItem={({item}) => <Item item={item} imageLayout={props.imageLayout} titleLayout={props.titleLayout} iconLayout={props.iconLayout} optionalMsgLayout={props.description} isDynamicScreen={props.isDynamicScreen}/>}
                keyExtractor={(item) => item.id}
                onEndReached={props.handleMoreData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => <ActivityIndicator size="large" color="#0000ff"/>}
                />
        </StyledView>
    );
}