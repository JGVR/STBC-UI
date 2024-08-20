import {View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import MailHeaderIcon from './MailHeaderIcon';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const mailHeaderLayout = {
    position: "absolute",
    top: "top-[20%]",
    bottom: "bottom-0",
    left: "left-[85%]",
    right: "right-0",
    color: "black"
}

export default function HomeScreenHeader(props: {title: string, imageDetail: any}){
    return(
        <StyledView className="w-full h-full">
            <StyledView className="w-[10%]">
                <StyledImage className='h-10 w-10' source={props.imageDetail}/>
            </StyledView>
            <StyledView className='absolute top-[20%] left-[12%] w-[15%]'>
                <StyledText className="text-black text-lg italic font-bold">{props.title}</StyledText>
            </StyledView>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
        </StyledView>
    );
}