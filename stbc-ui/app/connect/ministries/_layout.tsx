import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import ComponentLayout from "@/utils/ComponentLayout";

const iconLayout = new ComponentLayout({height:"", width:"", top:"top-[12.5%]", left: "left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-[10.8%]", color:"#0E4749"});
const titleLayout = new ComponentLayout({height:"", width:"", left:"left-44", top:"top-4"});
const mailIconLayout = new ComponentLayout({height:"", width:"", left:"left-32", color:"#0E4749"});

export default function MinistriesLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <GeneralScreenHeader title="Ministry" mailIconLayout={mailIconLayout} backButtonLayout={buttonLayout} titleLayout={titleLayout} backIconLayout={iconLayout}/>
            }}/>
        </Stack>
    );
}