import {View, Text, Image, FlatList} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

type ItemProps = {title: string, optionalMsg: string};

const Item = ({title, optionalMsg}: ItemProps) => (
    <StyledView className='flex-row m-3 border-b-2 border-b-white'>
        <StyledImage source={require('@/assets/cross.jpeg')} className="h-14 w-24 rounded-lg mb-4"/>
        <StyledView className='flex-1 ml-3 mt-3'>
            <StyledText className='h-5 text-white mb-1'>{title}</StyledText>
            {optionalMsg.length > 0 ? <StyledText className='h-5 text-white'>{optionalMsg}</StyledText> : null}
        </StyledView>
    </StyledView>
);


export default function ItemsList(props: {data: any[]}){
    return(
        <StyledView>
            <FlatList
                data={props.data}
                renderItem={({item}) => <Item title={item.title} optionalMsg={item.optionalMsg}/>}
                />
        </StyledView>
    );
}