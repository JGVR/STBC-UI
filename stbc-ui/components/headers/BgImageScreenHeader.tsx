import { ImageBackground, Text, View} from "react-native";
import {styled } from 'nativewind';
import BackButton from "../buttons/BackButton";
import { useEffect, useState } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledBgImg = styled(ImageBackground);
const iconLayout = {
    top: "top-14",
    left: "left-3",
    right: "",
    bottom: "",
    color: "#075985"
}
const buttonLayout = {
    top: "top-12",
    left: "",
    right: "right-[5%]",
    bottom: "",
    color: "#075985"
}

export default function BgImageScreenHeader(props: {router: any, buttonTitle: string, headerTitle: string, headerOptionalMsg: string|null}){
    return(
        <StyledView className="w-full h-60">
            <StyledBgImg className="h-64 w-full opacity-60 z-10" source={require('@/assets/cross.jpeg')}>
                <BackButton title={props.buttonTitle} iconLayout={iconLayout} buttonLayout={buttonLayout}/>
                <StyledText className="text-2xl text-sky-800 m-3 italic font-bold top-16 text-center">
                    {props.headerTitle}
                </StyledText>
                <StyledText className=" text-sky-800 m-3 italic font-bold top-[25%] text-left">
                    {props.headerOptionalMsg}
                </StyledText>
            </StyledBgImg>
        </StyledView>
    );
}