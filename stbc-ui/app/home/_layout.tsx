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
            <Stack.Screen name="howToBeSaved" options={{
                headerTitle: "How To Be Saved",
                headerBackTitle: "Home"
            }}/>
            <Stack.Screen name="about" options={{
                headerTitle: "About",
                headerBackTitle: "Home"
            }}/>
            <Stack.Screen name="dailyDevotions" options={{
                headerTitle: "Daily Devotions",
                headerBackTitle: "Home"
            }}/>
        </Stack>
    );
}