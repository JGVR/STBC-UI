import {View, Pressable, Share, Alert} from 'react-native';
import {styled} from 'nativewind';
import Feather from '@expo/vector-icons/Feather';
import { useCallback } from 'react';

const StyledView = styled(View);

export default function ShareButton(props: {url: string}){
    const onShare = useCallback(async () => {
        try{
            const result = await Share.share({url: props.url});
        }catch(error: any){
            Alert.alert(error.message);
        }
    }, []);

    return(
        <Pressable onPress={onShare}>
            <StyledView className='h-12 w-12 ml-20 mt-6 mb-6 bg-white rounded-full'>
                <StyledView className='m-3'>
                    <Feather name="share" size={24} color="#002626"/>
                </StyledView>
            </StyledView>
        </Pressable>
    );
}