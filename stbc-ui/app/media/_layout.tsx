import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import ComponentLayout from "@/utils/ComponentLayout";

export default function MediaLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: true
            }}/>
            <Stack.Screen name="[video]" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}