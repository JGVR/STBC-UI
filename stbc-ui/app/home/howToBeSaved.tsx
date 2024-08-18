import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function HowToBeSavedScreen() {
    return (
        <StyledView className="bg-blue-500 h-full">
            <StyledView className='flex-row justify-between flex-wrap mt-4'>
                <StyledView className="bg-black w-1/2 h-56 flex-none max-w-[46%] m-2"/>
                <StyledView className="bg-red-400 w-1/2 h-56 flex-none max-w-[46%] m-2"/>
            </StyledView>
        </StyledView>
    );
}
