import {View, Text} from 'react-native';
import { styled } from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function SectionHeader(props: {title: string, containerLayout: string, iconLayout: string, titleLayout: string}){
    return (
        <StyledView className={props.containerLayout}>
            <StyledText className={props.titleLayout}>{props.title}</StyledText>
            <StyledView className={props.iconLayout}>
                <MaterialIcons name="navigate-next" size={30} color="white" />
            </StyledView>
        </StyledView>
    )
}