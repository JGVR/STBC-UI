import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import ComponentLayout from "@/utils/ComponentLayout";

const iconLayout = new ComponentLayout({height:"", width:"", top:"top-14", left:"left-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-12", right:"right-[5%]", color: "white"});
const titleLayout = new ComponentLayout({height:"", width:""})
const mailIconLayout = new ComponentLayout({height:"", width:"", top:"top-3", left:"left-96", color:"white"});

export default function MediaLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="[video]" options={{
                header: () => <GeneralScreenHeader title="" backButtonTitle="Media" titleLayout={titleLayout} backIconLayout={iconLayout} mailIconLayout={mailIconLayout} backButtonLayout={buttonLayout}/>,
                headerTransparent: true
            }}/>
        </Stack>
    )
}