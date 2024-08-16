import {Stack} from 'expo-router';
import HomeScreenHeader from '@/components/HomeScreenHeader';

const headerDetails = {
    title: "STBC",
    imageDetail: require("@/assets/favicon.png")
};

export default function HomeLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: () => <HomeScreenHeader title={headerDetails.title} imageDetail={headerDetails.imageDetail}/>
            }}/>
            <Stack.Screen name="details"/>
        </Stack>
    );
}