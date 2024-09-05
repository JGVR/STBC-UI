import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import Ionicons from '@expo/vector-icons/Ionicons';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);

export default function MailHeaderIcon(props: {layoutDetails: ComponentLayout}){
    return (
        <StyledView className={props.layoutDetails ? `${props.layoutDetails.position} ${props.layoutDetails.top} ${props.layoutDetails.bottom} ${props.layoutDetails.left} ${props.layoutDetails.right}` : ""}>
            <Ionicons name="mail-sharp" size={30} color={props.layoutDetails.color}/>
        </StyledView>
    );
}