import {View, Text, Image, Pressable} from 'react-native';
import {styled} from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function Item(props: {item: any, imageLayout: string, titleLayout: string, optionalMsgLayout: string, iconLayout: string, isDynamicScreen: boolean}){
    
    const sDate = new Date(props.item.startDate).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
   });
    const eDate = new Date(props.item.endDate).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
   });

    return(
        <Link href={{
            pathname: props.isDynamicScreen ? `/${props.item.targetScreen}/${props.item.title}` : `/${props.item.targetScreen}`,
            params: {title: props.item.title, description: props.item.description, eventUrl: props.item.url, imageUrl: props.item.imageUrl, location: props.item.location, startDate: props.item.startDate, endDate: props.item.endDate}
        }} asChild>
            <Pressable>
                <StyledView className='flex-row ml-3 mr-3 mt-5 border-b-2 border-b-white'>
                    <StyledImage src={props.item.imageUrl} className={`${props.imageLayout}`}/>
                    <StyledView className='flex-1 ml-3 mt-3'>
                        <StyledText className={`${props.titleLayout}`}>{props.item.title}</StyledText>
                        {props.item.startDate.length > 0 ? <StyledText className={`${props.optionalMsgLayout}`}>{`${sDate}•${eDate}`}</StyledText> : null}
                    </StyledView>
                    <StyledView className={props.iconLayout}>
                        <MaterialIcons name="navigate-next" size={26} color="white" />
                    </StyledView>
                </StyledView>
            </Pressable>
        </Link>
    );
}