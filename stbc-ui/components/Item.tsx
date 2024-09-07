import {View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function Item(props: {title: string, optionalMsg: string, imageLayout: string, titleLayout: string, optionalMsgLayout: string}){
    return(
        <StyledView className='flex-row ml-3 mr-3 mt-5 border-b-2 border-b-white'>
            <StyledImage source={require('@/assets/cross.jpeg')} className={`${props.imageLayout}`}/>
            <StyledView className='flex-1 ml-3 mt-3'>
                <StyledText className={`${props.titleLayout}`}>{props.title}</StyledText>
                {props.optionalMsg.length > 0 ? <StyledText className={`${props.optionalMsgLayout}`}>{props.optionalMsg}</StyledText> : null}
            </StyledView>
            <StyledView className="mt-4">
                <MaterialIcons name="navigate-next" size={26} color="white" />
            </StyledView>
        </StyledView>
    );
}