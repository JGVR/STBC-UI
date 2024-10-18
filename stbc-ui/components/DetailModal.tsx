import {View, Text, Modal, ScrollView, Image, Pressable} from 'react-native';
import { styled } from 'nativewind';
import AntDesign from '@expo/vector-icons/AntDesign';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

export default function DetailModal(props: {member: any, isVisible: boolean, setIsVisible: any}){
    return(
        <Modal visible={props.isVisible} transparent={true} animationType='slide'>
                <StyledView className="bg-dark-green bg-opacity-50 h-[60%] w-96 mt-40 ml-5 rounded-lg border-teal-500 border">
                    <StyledView className='flex-row'>
                        <StyledText className="text-white text-center text-lg font-bold mb-4 ml-24 mt-2 w-52">{props.member.current?.firstName} {props.member.current?.lastName}</StyledText>
                        <StyledPressable className='mt-2 ml-[8%]' onPress={() => props.setIsVisible(false)}>
                            <AntDesign name="closecircleo" size={38} color="#14B8A6" />
                        </StyledPressable>
                    </StyledView>
                    <StyledImage className="h-48 w-48 ml-[27%]" src={props.member.current?.imageUrl} />
                    <StyledScrollView>
                        <StyledText className="m-6 text-white text-base text-left leading-7">This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.
                        </StyledText>
                    </StyledScrollView>  
                </StyledView>
            </Modal>
    );
}