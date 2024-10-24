import {View, Text, Image, Pressable} from 'react-native';
import {styled} from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function VideoComp(props: {videoItm: any, isDynamicScreen: boolean, imageLayout: string, titleLayout: string, descriptionLayout: string}){
    return(
        <Link href={{
            pathname: props.isDynamicScreen ? `/${props.videoItm.targetScreen}/${props.videoItm.title.slice(0,5) || props.videoItm.name}` : `/${props.videoItm.targetScreen}`,
            params: {data: JSON.stringify(props.videoItm)}
        }} asChild>
            <Pressable>
                <StyledView className='mb-4'>
                    <StyledImage className='h-32 w-56 mt-5 ml-3 mr-2 rounded-2xl border-2' src="https://i.ytimg.com/vi/VZ_PtLdpR9A/mqdefault.jpg" resizeMode='contain'/>
                    <StyledText className='h-7 w-48 mt-2 ml-4 text-base text-white font-bold italic'>{props.videoItm.title}</StyledText>
                    <StyledText className='h-7 w-48 ml-5 text-sm text-white italic' numberOfLines={1}>{`${props.videoItm.date} • ${props.videoItm.speaker}`}</StyledText>
                </StyledView>
            </Pressable>
        </Link>
    );
}