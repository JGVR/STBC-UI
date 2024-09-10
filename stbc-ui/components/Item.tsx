import {View, Text, Image, Pressable} from 'react-native';
import {styled} from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function Item(props: {title: string, screenUrl: string, imageUrl: string, description: string, imageLayout: string, titleLayout: string, optionalMsgLayout: string}){
    return(
        <Link href={props.imageUrl} asChild>
            <Pressable>
                <StyledView className='flex-row ml-3 mr-3 mt-5 border-b-2 border-b-white'>
                    <StyledImage source={require('@/assets/HomeComing - stbc.png')} className={`${props.imageLayout}`}/>
                    <StyledView className='flex-1 ml-3 mt-3'>
                        <StyledText className={`${props.titleLayout}`}>{props.title}</StyledText>
                        {props.description.length > 0 ? <StyledText className={`${props.optionalMsgLayout}`}>{props.description}</StyledText> : null}
                    </StyledView>
                    <StyledView className="mt-4">
                        <MaterialIcons name="navigate-next" size={26} color="white" />
                    </StyledView>
                </StyledView>
            </Pressable>
        </Link>
    );
}