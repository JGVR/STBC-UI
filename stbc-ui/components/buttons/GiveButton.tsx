import {View, Pressable, Text, Linking} from 'react-native';
import {styled} from 'nativewind';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function GiveButton(props: {url: string, iconSize: number, containerStyle: string, iconStyle: string, titleStyle: string}){
    const handlePress = async () => {
        try{
            await Linking.openURL(props.url);
        }catch(error){
            console.error(`Something went wrong: ${error}`);
        }
    };
    return(
        <Pressable onPress={handlePress}>
            <StyledView className={props.containerStyle}>
                <StyledView className={props.iconStyle}>
                    <MaterialCommunityIcons name="hand-heart-outline" size={24} color="#002626" />
                </StyledView>
                <StyledText className={props.titleStyle}>Give</StyledText>
            </StyledView>
        </Pressable>
    );
}