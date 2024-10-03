import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import { useLocalSearchParams } from 'expo-router';
import ChurchClass from '@/model/ChurchClass';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function ClassScreen(){
    const {data} = useLocalSearchParams();
    const sundayClass = typeof data === "string" ? JSON.parse(data) as ChurchClass: null;

    return(
        <StyledView>
            <StyledText>{sundayClass?.name}</StyledText>
        </StyledView>
    );
}