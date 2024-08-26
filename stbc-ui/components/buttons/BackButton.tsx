import {Button, View} from 'react-native';
import {styled} from 'nativewind';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const StyledView = styled(View);
const StyledButton = styled(Button);

export default function BackButton(props: {title: string}){
    const router = useRouter();

    return (
        <StyledView className="flex-row">
            <StyledView className="top-2 right-2">
                <MaterialIcons name="arrow-back-ios" size={24} color="#3b5998" onPress={() => {router.back()}}/>
            </StyledView>
            <StyledView className='right-5'>
                <StyledButton 
                    onPress={() => {router.back()}} 
                    title={props.title}/>
            </StyledView>
        </StyledView>
    );
}