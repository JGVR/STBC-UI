import {Text, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function DetailScreen(){
    return (
        <StyledView className="flex-row justify-between">
            <StyledText>This is the details page</StyledText>
            <StyledText className="left-2">This is the details page1111</StyledText>
        </StyledView>
    );
}