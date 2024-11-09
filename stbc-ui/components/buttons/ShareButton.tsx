import {View, Pressable, Share, Alert, Text} from 'react-native';
import {styled} from 'nativewind';
import Feather from '@expo/vector-icons/Feather';
import { useCallback } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function ShareButton(props: {url: string, iconSize: number, containerStyle: string, iconStyle: string, titleStyle: string}){
    const onShare = useCallback(async () => {
        try{
            const result = await Share.share({url: props.url});
        }catch(error: any){
            Alert.alert(error.message);
        }
    }, []);

    return(
        <Pressable onPress={onShare}>
            <StyledView className={props.containerStyle}>
                <StyledView className={props.iconStyle}>
                    <Feather name="share" size={props.iconSize} color="#002626"/>
                </StyledView>
                <StyledText className={props.titleStyle}>Share</StyledText>
            </StyledView>
        </Pressable>
    );
}