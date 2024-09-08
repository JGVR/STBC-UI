import {View, Pressable} from 'react-native';
import {styled} from 'nativewind';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const StyledView = styled(View);

export default function CalendarButton(){
    return(
        <Pressable>
            <StyledView className='h-12 w-12 ml-40 mt-6 mb-6 bg-white rounded-full'>
                <StyledView className='m-3'>
                    <FontAwesome6 name="calendar-plus" size={24} color="#002626" />
                </StyledView>
            </StyledView>
        </Pressable>
    );
}