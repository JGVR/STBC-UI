import {View, Text, Image, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useLocalSearchParams } from 'expo-router';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function VideoScreen(){
    const {data} = useLocalSearchParams(); //{title, description, url, imageUrl, location, startDate, endDate}
    return(
        <StyledScrollView className='bg-dark-green h-full w-full'>
            <StyledText className='text-white'>Hello!</StyledText>
        </StyledScrollView>
    );
}