import {View, Text} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function SundaySchoolsScreen(){
    return(
        <StyledView>
            <StyledText>Hello!</StyledText>
        </StyledView>
    );
}