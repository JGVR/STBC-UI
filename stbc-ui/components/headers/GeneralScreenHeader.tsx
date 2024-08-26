import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import MailHeaderIcon from './MailHeaderIcon';

const StyledView = styled(View);
const StyledText = styled(Text);
const mailHeaderLayout = {
    position: "",
    top: "",
    left: "left-24",
    right: "",
    bottom: "",
    color: "black"
}

export default function GeneralScreenHeader(props: {title: string}){
    return(
        <StyledView className="w-full h-full">
            <StyledView className='flex-row left-10'>
                <StyledText className="text-black text-lg italic font-bold">{props.title}</StyledText>
                <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            </StyledView>
        </StyledView>
    );
}