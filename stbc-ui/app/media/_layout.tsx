import { Stack } from "expo-router";

export default function MediaLayout(){
    return(
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="[video]"/>
        </Stack>
    )
}