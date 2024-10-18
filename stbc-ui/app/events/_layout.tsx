import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import ComponentLayout from "@/utils/ComponentLayout";

const iconLayout = new ComponentLayout({height:"", width:"", top:"top-14", left:"left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-12", right:"right-[5%]", color: "#0E4749"});
const titleLayout = new ComponentLayout({height:"", width:""})
const mailIconLayout = new ComponentLayout({height:"", width:"", left:"left-96", top:"top-4", color:"#0E4749"});

export default function HomeLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="[event]" options={{
                header: () => <GeneralScreenHeader title="" backButtonTitle="Events" backIconLayout={iconLayout} backButtonLayout={buttonLayout} mailIconLayout={mailIconLayout} titleLayout={titleLayout}/>
            }} />
        </Stack>
    );
}