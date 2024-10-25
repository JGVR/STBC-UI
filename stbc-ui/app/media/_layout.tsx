import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import ComponentLayout from "@/utils/ComponentLayout";

const iconLayout = new ComponentLayout({height:"", width:"", top:"top-14", left:"left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-12", right:"right-[5%]", color: "#0E4749"});
const titleLayout = new ComponentLayout({height:"", width:"", left: "", top: ""})
const mailIconLayout = new ComponentLayout({height:"", width:"", top:"top-4", left:"left-96", color:"#0E4749"});

export default function MediaLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <GeneralScreenHeader title="" backButtonTitle="Home" backButtonLayout={buttonLayout} backIconLayout={iconLayout} titleLayout={titleLayout} mailIconLayout={mailIconLayout}/>
            }}/>
            <Stack.Screen name="[video]"/>
        </Stack>
    )
}