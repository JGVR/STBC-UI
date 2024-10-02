import {View, Text} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function ClassScreen(){
    return(
        <StyledView>
            <StyledText>Hell0!</StyledText>
        </StyledView>
    );
}