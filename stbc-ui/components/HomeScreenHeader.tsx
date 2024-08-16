import {View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import MailHeaderIcon from './MailHeaderIcon';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function HomeScreenHeader(props: {title: string, imageDetail: any}){
    return(
        <StyledView className="w-full h-full">
            <StyledView className="">
                <StyledImage className='h-11' source={props.imageDetail}/>
            </StyledView>
            <StyledView className='absolute top-[20%] left-[13%] w-[15%]'>
                <StyledText className="text-black text-lg italic font-bold">{props.title}</StyledText>
            </StyledView>
        <MailHeaderIcon/>
        </StyledView>
    );
}