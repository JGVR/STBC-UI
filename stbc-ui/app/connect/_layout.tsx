import { Stack } from "expo-router";

export default function ConnectLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="ministries" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="schools" options={{
                headerShown: false
            }}/>
        </Stack>
    );
};