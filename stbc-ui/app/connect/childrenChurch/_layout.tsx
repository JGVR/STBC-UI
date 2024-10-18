import { Stack } from "expo-router";

export default function ChildrenChurchLayout(){
    return(
        <Stack>
            <Stack.Screen name='index' options={{
                headerShown: false
            }}/>
        </Stack>
    );
}