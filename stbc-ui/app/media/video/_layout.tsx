import { Stack } from "expo-router";

export default function VideoLayout(){
    return(
        <Stack>
            <Stack.Screen name="[video]" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}