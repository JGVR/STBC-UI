import {View, Text, Image, Pressable} from 'react-native';
import {styled} from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function VideoComp(props: {videoItm: any, isDynamicScreen: boolean}){
    return(
        <Link href={{
            pathname: props.isDynamicScreen ? `/${props.videoItm.targetScreen}/${props.videoItm.title || props.videoItm.name}` : `/${props.videoItm.targetScreen}`,
            params: {data: JSON.stringify(props.videoItm)}
        }} asChild>
            <Pressable>
                <StyledView>
                    <StyledImage className='h-32 w-56 mt-5 ml-5 mr-5 mb-1 rounded-2xl border-2' src="https://i.ytimg.com/vi/VZ_PtLdpR9A/mqdefault.jpg" resizeMode='contain'/>
                    <StyledText className='h-8 w-48 mt-2 ml-7 text-lg text-white font-bold italic'>{props.videoItm.title}</StyledText>
                    <StyledText className='h-8 w-48 ml-7 text-sm text-white italic'>{props.videoItm.title}</StyledText>
                </StyledView>
            </Pressable>
        </Link>
    );
}