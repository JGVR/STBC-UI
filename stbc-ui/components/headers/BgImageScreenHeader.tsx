import { ImageBackground, Text, View, Image} from "react-native";
import {styled } from 'nativewind';
import BackButton from "../buttons/BackButton";
import ComponentLayout from "@/utils/ComponentLayout";
import ImageButton from "../ImageButton";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledBgImg = styled(ImageBackground);
const StyledImage = styled(Image);

export default function BgImageScreenHeader(props: {router: any, imageUrl: string, thumbNailUrl: string, buttonTitle: string, headerTitle: string, headerOptionalMsg: string|null, containerLayout: ComponentLayout, subContainerLayout: ComponentLayout, backButtonLayout: ComponentLayout|any, backIconLayout: ComponentLayout|any, backButtonShown: boolean, imageLayout: ComponentLayout, thumbnailLayout: ComponentLayout, titleLayout: ComponentLayout, optionalMsgLayout: ComponentLayout, imageButtonData: any}){
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
            <StyledView className={`${props.subContainerLayout.height} ${props.subContainerLayout.width} ${props.subContainerLayout.top}`}>
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
                } src={props.imageUrl}/>
                {props.backButtonShown ? <BackButton title={props.buttonTitle} iconLayout={props.backIconLayout} buttonLayout={props.backButtonLayout}/> : null}
                {props.thumbNailUrl ? <ImageButton title="" data={props.imageButtonData} imageLayout={props.thumbnailLayout} imageDetail={props.thumbNailUrl} url={`/${props.imageButtonData.targetScreen}/${props.imageButtonData.title}`} isOutgoingUrl={false} textLayout={new ComponentLayout({height:"", width:""})}/> : null}
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
                                            italic font-bold text-center`}>
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
                                            italic font-bold text-left`}>
                        {props.headerOptionalMsg}
                </StyledText>
            </StyledView>
        </StyledView>
    );
}