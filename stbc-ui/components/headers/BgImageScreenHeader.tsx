import { ImageBackground, Text, View} from "react-native";
import {styled } from 'nativewind';
import BackButton from "../buttons/BackButton";
import ComponentLayout from "@/utils/ComponentLayout";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledBgImg = styled(ImageBackground);

export default function BgImageScreenHeader(props: {router: any, buttonTitle: string, headerTitle: string, headerOptionalMsg: string|null, backButtonLayout: ComponentLayout|any, backIconLayout: ComponentLayout|any, backButtonShown: boolean, imageLayout: ComponentLayout}){
    return(
        <StyledView className="w-full h-60">
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
                     opacity-60 z-10`
                } source={require('@/assets/cross.jpeg')}>
                {props.backButtonShown ? <BackButton title={props.buttonTitle} iconLayout={props.backIconLayout} buttonLayout={props.backButtonLayout}/> : null}
                <StyledText className="text-2xl text-midnight-green m-3 italic font-bold top-16 text-center">
                    {props.headerTitle}
                </StyledText>
                <StyledText className=" text-midnight-green m-3 italic font-bold top-[25%] text-left">
                    {props.headerOptionalMsg}
                </StyledText>
            </StyledBgImg>
        </StyledView>
    );
}