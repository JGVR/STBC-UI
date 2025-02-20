import {View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import MailHeaderIcon from './MailHeaderIcon';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const mailHeaderLayout = new ComponentLayout({height: "", width:"", top:"top-12", left:"", color:"#0E4749"})

export default function HomeScreenHeader(props: {title: string, imageDetail: any}){
    return(
        <StyledView className="w-full h-24 bg-white flex flex-row p-2">
            <StyledView className="w-[10%] grow">
                <StyledImage className='h-10 w-10 top-10' source={props.imageDetail}/>
            </StyledView>
            <StyledView className='absolute top-14 left-[12%] w-[15%]'>
                <StyledText className="text-midnight-green text-lg italic font-bold">{props.title}</StyledText>
            </StyledView>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
        </StyledView>
    );
}