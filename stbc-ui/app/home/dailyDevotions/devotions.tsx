import {View, Text, ScrollView} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);

export default function DevotionScreen(){
    return(
        <StyledScrollView>
            <Text>Daily Devotion</Text>
        </StyledScrollView>
    );
}