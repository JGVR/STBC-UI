import {View, Text, Image} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function MediaScreen(){
    return(
        <StyledView>
            <StyledText>Hello!</StyledText>
        </StyledView>
    );
}