import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import Ionicons from '@expo/vector-icons/Ionicons';

const StyledView = styled(View);

export default function MailHeaderIcon(){
    return (
        <StyledView className='absolute left-[85%] top-[20%]'>
            <Ionicons name="mail-sharp" size={30} color="black" />
        </StyledView>
    );
}