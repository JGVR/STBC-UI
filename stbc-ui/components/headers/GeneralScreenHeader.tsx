import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import MailHeaderIcon from './MailHeaderIcon';
import BackButton from '../buttons/BackButton';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function GeneralScreenHeader(props: {title: string, backButtonTitle: string, backButtonLayout: ComponentLayout, backIconLayout: ComponentLayout, titleLayout: ComponentLayout, mailIconLayout: ComponentLayout}){
    return(
        <StyledView className="w-full h-24 bg-transparent">
            <BackButton title={props.backButtonTitle} iconLayout={props.backIconLayout} buttonLayout={props.backButtonLayout}/>
            <StyledView className="flex-row">
                <StyledText className={`text-midnight-green text-lg italic font-bold ${props.titleLayout.top} ${props.titleLayout.left}`}>{props.title}</StyledText>
                <MailHeaderIcon layoutDetails={props.mailIconLayout}/>
            </StyledView>
        </StyledView>
    );
}