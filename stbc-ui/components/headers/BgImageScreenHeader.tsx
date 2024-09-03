import { ImageBackground, Text, View} from "react-native";
import {styled } from 'nativewind';
import BackButton from "../buttons/BackButton";
import { useEffect, useState } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledBgImg = styled(ImageBackground);
const iconLayout = {
    top: "top-12",
    left: "left-3",
    right: "",
    bottom: "",
    color: "#075985"
}
const buttonLayout = {
    top: "top-10",
    left: "",
    right: "right-[5%]",
    bottom: "",
    color: "#075985"
}

export default function BgImageScreenHeader(props: {router: any, buttonTitle: string}){
    const [isCompleted, setIsCompleted] = useState(false);
    const [devotions, setDevotions] = useState([])
    const url = "http://172.20.10.2:8000/find?type=devotion&churchId=1"
    
    useEffect(() => {
        fetch(url).then(
            response => {
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }
        ).then(data => {
            setDevotions(data);
            setIsCompleted(true);
        })
        .catch(error => {
            console.error(`Something went wrong with the API request ${error}`);
            setIsCompleted(false);
        })
    }, [])

    return(
        <StyledView className="w-full h-72">
            <StyledBgImg className="h-56 w-full opacity-60 z-10" source={require('@/assets/cross.jpeg')}>
                <BackButton title={props.buttonTitle} iconLayout={iconLayout} buttonLayout={buttonLayout}/>
                <StyledText className="text-2xl text-sky-800 m-3 italic font-bold top-12 text-center">
                    {devotions.length > 0 ? devotions[1]["title"] : ""}
                </StyledText>
                <StyledText className=" text-sky-800 m-3 italic font-bold top-[20%] text-left">
                    {devotions.length > 0 ? devotions[1]["memberId"] : ""}
                </StyledText>
            </StyledBgImg>
        </StyledView>
    );
}