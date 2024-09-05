import {Stack} from 'expo-router';
import GeneralScreenHeader from '@/components/headers/GeneralScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';

const headerDetails = {
    title: "Daily Devotions",
    imageDetail: require("@/assets/favicon.png")
};
const iconLayout = new ComponentLayout({height:"", width:"", top:"top-[12.5%]", left: "left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-[10.8%]", color:"#0E4749"});
const titleLayout = new ComponentLayout({height:"", width:"", left:"left-36", top:"top-4"});
const mailIconLayout = new ComponentLayout({height:"", width:"", left:"left-24", color:"#0E4749"});

export default function DailyDevotionsLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <GeneralScreenHeader title={headerDetails.title} backButtonLayout={buttonLayout} backIconLayout={iconLayout} titleLayout={titleLayout} mailIconLayout={mailIconLayout}/>,
            }}/>
            <Stack.Screen name="[day]" options={{
                headerShown: false
            }}/>
        </Stack>
    );
}