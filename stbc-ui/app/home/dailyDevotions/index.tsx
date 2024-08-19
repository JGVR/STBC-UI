import {Text, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function DailyDevotionsScreen(){
    return(
        <StyledView>
            <StyledText>Test</StyledText>
        </StyledView>
    );
}