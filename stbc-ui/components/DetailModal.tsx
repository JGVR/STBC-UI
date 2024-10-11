import {View, Text, Modal, ScrollView, Image, Pressable} from 'react-native';
import { styled } from 'nativewind';
import { useState } from 'react';
import Member from '@/model/Member';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

export default function DetailModal(props: {member: any, isVisible: boolean, setIsVisible: any}){
    return(
        <Modal visible={props.isVisible} transparent={true} animationType='slide'>
                <StyledView className="bg-dark-green bg-opacity-50 h-[60%] w-96 mt-40 ml-5 rounded-lg">
                    <StyledView className='flex-row'>
                        <StyledText className="text-white text-lg font-bold mb-4 ml-32 mt-2">{props.member.current?.firstName} {props.member.current?.lastName}</StyledText>
                        <StyledPressable className='mt-2 ml-20' onPress={() => props.setIsVisible(false)}>
                            <StyledText className="text-teal-500 text-lg font-bold italic">Close</StyledText>
                        </StyledPressable>
                    </StyledView>
                    <StyledImage className="h-48 w-48 ml-[24%]" src={props.member.current?.imageUrl} />
                    <StyledScrollView>
                        <StyledText className="m-6 text-white text-base text-left leading-7">This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go. This is where the bio of the church member will go.This is where the bio of the church member will go.This is where the bio of the church member will go.
                        </StyledText>
                    </StyledScrollView>  
                </StyledView>
            </Modal>
    );
}