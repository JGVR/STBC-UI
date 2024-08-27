import { ImageBackground, Text, View} from "react-native";
import {styled } from 'nativewind';
import BackButton from "../buttons/BackButton";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledBgImg = styled(ImageBackground);
const iconLayout = {
    top: "top-12",
    left: "left-3",
    right: "",
    bottom: "",
    color: "#0D9488"
}
const buttonLayout = {
    top: "top-10",
    left: "",
    right: "right-[5%]",
    bottom: "",
    color: "#0D9488"
}

export default function BgImageScreenHeader(props: {router: any, buttonTitle: string}){
    return(
        <StyledView className="w-full h-56 rounded-b-2xl overflow-hidden">
            <StyledBgImg className="h-full w-full opacity-60" source={require('@/assets/cross.jpeg')}>
                <BackButton title={props.buttonTitle} iconLayout={iconLayout} buttonLayout={buttonLayout}/>
                <StyledText className="text-2xl text-teal-600 m-3 italic font-bold top-12 text-center">"The Right Attention To Contention"</StyledText>
                <StyledText className=" text-teal-600 m-3 italic font-bold top-[25%] text-left">By Pastor Ancel Presnell</StyledText>
            </StyledBgImg>
        </StyledView>
    );
}