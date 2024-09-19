import { Stack } from "expo-router";

export default function ConnectLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
        </Stack>
    );
};