import {View, FlatList} from 'react-native';
import {styled} from 'nativewind';
import Item from './Item';

const StyledView = styled(View);

export default function ItemsList(props: {data: any[], imageLayout: string, titleLayout: string, description: string}){
    return(
        <StyledView className="h-[85%] w-full">
            <FlatList
                data={props.data}
                renderItem={({item}) => <Item item={item} imageLayout={props.imageLayout} titleLayout={props.titleLayout} optionalMsgLayout={props.description}/>}
                />
        </StyledView>
    );
}