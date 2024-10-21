import {View, FlatList, ActivityIndicator} from 'react-native';
import {styled} from 'nativewind';
import Item from './Item';

const StyledView = styled(View);

export default function ItemsList(props: {data: any[], imageLayout: string, containerLayout: string, titleLayout: string, iconLayout: string, description: string, isDynamicScreen: boolean, isDynamicList: boolean, onScroll: any, isLoading: boolean}){
    if(!props.isDynamicList)
    {
        return(
            <StyledView className={props.containerLayout}>
                <FlatList
                    data={props.data}
                    renderItem={({item}) => !item ? null : <Item item={item} imageLayout={props.imageLayout} titleLayout={props.titleLayout} iconLayout={props.iconLayout} optionalMsgLayout={props.description} isDynamicScreen={props.isDynamicScreen}/>}
                    />
            </StyledView>
        );
    };
    return(
        <StyledView className={props.containerLayout}>
            <FlatList
                data={props.data}
                renderItem={({item}) => !item ? null : <Item item={item} imageLayout={props.imageLayout} titleLayout={props.titleLayout} iconLayout={props.iconLayout} optionalMsgLayout={props.description} isDynamicScreen={props.isDynamicScreen}/>}
                keyExtractor={(item) => item.id}
                onScroll={props.onScroll}
                onEndReachedThreshold={0}
                ListFooterComponent={() => props.isLoading ? <StyledView className="mt-2 mb-20"><ActivityIndicator size="large" color="#FFFFFF"/></StyledView> : null}
                />
        </StyledView>
    );
}