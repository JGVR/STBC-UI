import {Stack, router} from 'expo-router';
import BackButton from '@/components/buttons/BackButton';
import GeneralScreenHeader from '@/components/headers/GeneralScreenHeader';

const headerDetails = {
    title: "Daily Devotions",
    imageDetail: require("@/assets/favicon.png")
};

export default function DailyDevotionsLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: () => <GeneralScreenHeader title={headerDetails.title}/>,
                headerLeft: () => <BackButton title="Home"/>
            }}/>
            <Stack.Screen name="devotions" options={{
                headerShown: true
            }}/>
        </Stack>
    );
}