import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import ComponentLayout from "@/utils/ComponentLayout";

const iconLayout = new ComponentLayout({height:"", width:"", top:"top-[120%]", left: "left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-[100%]", color:"#0E4749"});
const titleLayout = new ComponentLayout({height:"", width:"", left:"left-36", top:"top-3"});
const mailIconLayout = new ComponentLayout({height:"", width:"", top:"top-3", left:"left-60", color:"#0E4749"});

export default function SundaySchoolLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <GeneralScreenHeader title="Sunday School" backButtonTitle="Connect" mailIconLayout={mailIconLayout} backButtonLayout={buttonLayout} titleLayout={titleLayout} backIconLayout={iconLayout}/>
            }}/>
            <Stack.Screen name="[class]" options={{
                headerShown: false
            }}/>
        </Stack>
    );
}