import {View, Text, Image, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ShareButton from '@/components/buttons/ShareButton';
import CalendarButton from '@/components/buttons/CalendarButton';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const imageUrl = require("@/assets/cross.jpeg");

export default function EventScreen(){
    return(
        <StyledScrollView className='bg-dark-green h-full w-full'>
            <StyledImage className='h-60 w-96 mt-5 ml-5 mr-5 mb-1 rounded-2xl' source={imageUrl}/>
            <StyledView>
                <StyledText className='text-teal-400 text-2xl font-bold text-left ml-6'>Homecoming 2024!</StyledText>
                <StyledText className='text-teal-400 text-left ml-6'>Wed, Sep 4 • 6:30pm - 7:30pm</StyledText>
                <StyledView className='flex-row'>
                    <ShareButton/>
                    <CalendarButton/>
                </StyledView>
                <StyledText className='text-white text-lg mt-1 ml-5 mr-3 mb-2'>{"Celebrating 14 year of faithful ministry. One combined Service under the Tent. Everyone welcome, inflatabes and games for kids. Launch will be catered following the Service. \nSpecial Speaker: Pastor Dunnie Humphrey"}</StyledText>
                <StyledView>
                    <StyledText className='text-teal-400 font-bold ml-5 mt-3 mb-1 text-lg'>Location:</StyledText>
                    <StyledText className='text-white ml-8'>•1022 Old Stage Rd, Johnson City TN, 37615</StyledText>
                </StyledView>
                <StyledView>
                    <StyledText className='text-teal-400 font-bold ml-5 mt-3 mb-1 text-lg'>Contact:</StyledText>
                    <StyledText className='text-white ml-8'>•strongtowerbaptist@gmail.com</StyledText>
                </StyledView>
            </StyledView>
        </StyledScrollView>
    );
}