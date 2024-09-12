import {View, Text, Image, Pressable} from 'react-native';
import {styled} from 'nativewind';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function Item(props: {title: string, url: string, imageUrl: string, description: string, location: string, startDate: string, endDate: string, imageLayout: string, titleLayout: string, optionalMsgLayout: string}){

    const sDate = new Date(props.startDate).toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
   });
    const eDate = new Date(props.endDate).toLocaleString('en-US', {
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
            pathname: `/events/${props.title}`,
            params: {title: props.title, description: props.description, eventUrl: props.url, imageUrl: props.imageUrl, location: props.location, startDate: sDate, endDate: eDate}
        }} asChild>
            <Pressable>
                <StyledView className='flex-row ml-3 mr-3 mt-5 border-b-2 border-b-white'>
                    <StyledImage source={require('@/assets/HomeComing - stbc.png')} className={`${props.imageLayout}`}/>
                    <StyledView className='flex-1 ml-3 mt-3'>
                        <StyledText className={`${props.titleLayout}`}>{props.title}</StyledText>
                        {props.startDate.length > 0 ? <StyledText className={`${props.optionalMsgLayout}`}>{`${sDate}•${eDate}`}</StyledText> : null}
                    </StyledView>
                    <StyledView className="mt-4">
                        <MaterialIcons name="navigate-next" size={26} color="white" />
                    </StyledView>
                </StyledView>
            </Pressable>
        </Link>
    );
}