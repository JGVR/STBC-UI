import { Stack } from "expo-router";
import SearchScreenHeader from "@/components/headers/SearchScreenHeader";

export default function MediaLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: true,
                header: () => <SearchScreenHeader/>
            }}/>
            <Stack.Screen name="video" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}