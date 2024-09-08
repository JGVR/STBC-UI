import {View, Pressable} from 'react-native';
import {styled} from 'nativewind';
import Feather from '@expo/vector-icons/Feather';

const StyledView = styled(View);

export default function ShareButton(){
    return(
        <Pressable>
            <StyledView className='h-12 w-12 ml-20 mt-6 mb-6 bg-white rounded-full'>
                <StyledView className='m-3'>
                    <Feather name="share" size={24} color="#002626"/>
                </StyledView>
            </StyledView>
        </Pressable>
    );
}