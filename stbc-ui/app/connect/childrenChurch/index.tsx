import {View, Text, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

export default function ChildrenChurchScreen(){
    return(
        <StyledScrollView>
            <StyledText>Hello!</StyledText>
        </StyledScrollView>
    );
}