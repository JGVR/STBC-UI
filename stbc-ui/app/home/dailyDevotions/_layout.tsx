import {Stack, router} from 'expo-router';
import BackButton from '@/components/buttons/BackButton';
import GeneralScreenHeader from '@/components/headers/GeneralScreenHeader';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import { View } from 'react-native';
import { styled } from 'nativewind';

const headerDetails = {
    title: "Daily Devotions",
    imageDetail: require("@/assets/favicon.png")
};
const iconLayout = {
    top: "top-2",
    right: "right-2",
    bottom: "",
    left: "",
    color: "#075985"
};
const buttonLayout = {
    top: "top-0",
    right: "right-5",
    bottom: "",
    left: "",
    color: "#075985"
};
const StyledView = styled(View);


export default function DailyDevotionsLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: () => <GeneralScreenHeader title={headerDetails.title}/>,
                headerLeft: () => <BackButton title="Home" iconLayout={iconLayout} buttonLayout={buttonLayout}/>
            }}/>
            <Stack.Screen name="[day]" options={{
                //header: () => <BgImageScreenHeader router={router} buttonTitle='Devotions'/>,
                //headerTransparent: true
                headerShown: false
            }}/>
        </Stack>
    );
}