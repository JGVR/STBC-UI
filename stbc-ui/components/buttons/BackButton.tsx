import {Button, View, Pressable} from 'react-native';
import {styled} from 'nativewind';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledButton = styled(Button);

export default function BackButton(props: {title: string, iconLayout: ComponentLayout, buttonLayout: ComponentLayout}){
    const router = useRouter();

    return (
        <Pressable onPress={() => {router.back()}}>
            <StyledView className="flex-row">
                <StyledView className={`${props.iconLayout.top} ${props.iconLayout.bottom} ${props.iconLayout.left} ${props.iconLayout.right}`}>
                    <MaterialIcons name="arrow-back-ios" size={24} color={props.iconLayout.color}/>
                </StyledView>
                <StyledView className={`${props.buttonLayout.top} ${props.buttonLayout.bottom} ${props.buttonLayout.left} ${props.buttonLayout.right}`}>
                    <StyledButton  
                        onPress={() => {router.back()}}     
                        title={props.title}
                        color={props.buttonLayout.color}/>
                </StyledView>
            </StyledView>
        </Pressable>
    );
}