import { Stack } from "expo-router";

export default function GiveLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
        </Stack>
    );
}