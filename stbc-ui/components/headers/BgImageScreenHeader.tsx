import { ImageBackground, Text, View} from "react-native";
import {styled } from 'nativewind';
import BackButton from "../buttons/BackButton";
import ComponentLayout from "@/utils/ComponentLayout";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledBgImg = styled(ImageBackground);

export default function BgImageScreenHeader(props: {router: any, buttonTitle: string, headerTitle: string, headerOptionalMsg: string|null, containerLayout: ComponentLayout, backButtonLayout: ComponentLayout|any, backIconLayout: ComponentLayout|any, backButtonShown: boolean, imageLayout: ComponentLayout, titleLayout: ComponentLayout, optionalMsgLayout: ComponentLayout}){
    return(
        <StyledView className={`
                                ${props.containerLayout.height} 
                                ${props.containerLayout.width} 
                                ${props.containerLayout.top} 
                                ${props.containerLayout.bottom} 
                                ${props.containerLayout.left} 
                                ${props.containerLayout.right} 
                                ${props.containerLayout.position} 
                                ${props.containerLayout.border} 
                                ${props.containerLayout.color}`}>
            <StyledBgImg className={
                    `${props.imageLayout.height} 
                     ${props.imageLayout.width} 
                     ${props.imageLayout.position} 
                     ${props.imageLayout.top} 
                     ${props.imageLayout.bottom} 
                     ${props.imageLayout.left} 
                     ${props.imageLayout.right} 
                     ${props.imageLayout.size} 
                     ${props.imageLayout.border} 
                     ${props.imageLayout.opacity}
                     overflow-hidden`
                } source={require('@/assets/cross.jpeg')}>
                {props.backButtonShown ? <BackButton title={props.buttonTitle} iconLayout={props.backIconLayout} buttonLayout={props.backButtonLayout}/> : null}
                </StyledBgImg>
                <StyledText className={`
                                        ${props.titleLayout.height} 
                                        ${props.titleLayout.width} 
                                        ${props.titleLayout.position} 
                                        ${props.titleLayout.top} 
                                        ${props.titleLayout.bottom} 
                                        ${props.titleLayout.left} 
                                        ${props.titleLayout.right} 
                                        ${props.titleLayout.size} 
                                        ${props.titleLayout.border} 
                                        ${props.titleLayout.opacity} 
                                        ${props.titleLayout.color} 
                                        m-3 italic font-bold text-center`}>
                    {props.headerTitle}
                </StyledText>
                <StyledText className={`${props.optionalMsgLayout.height} 
                                        ${props.optionalMsgLayout.width} 
                                        ${props.optionalMsgLayout.position} 
                                        ${props.optionalMsgLayout.top} 
                                        ${props.optionalMsgLayout.bottom} 
                                        ${props.optionalMsgLayout.left} 
                                        ${props.optionalMsgLayout.right} 
                                        ${props.optionalMsgLayout.size} 
                                        ${props.optionalMsgLayout.border} 
                                        ${props.optionalMsgLayout.opacity} 
                                        ${props.optionalMsgLayout.color} 
                                        m-3 italic font-bold text-left`}>
                    {props.headerOptionalMsg}
                </StyledText>
        </StyledView>
    );
}