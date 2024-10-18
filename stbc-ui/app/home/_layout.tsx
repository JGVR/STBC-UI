import {Stack} from 'expo-router';
import HomeScreenHeader from '@/components/headers/HomeScreenHeader';
import GeneralScreenHeader from '@/components/headers/GeneralScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';

const headerDetails = {
    title: "STBC",
    imageDetail: require("@/assets/STBC-Logo.png")
};
const iconLayout = new ComponentLayout({height:"", width:"", top:"top-14", left:"left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"top-12", right:"right-[5%]", color: "#0E4749"});
const titleLayout = new ComponentLayout({height:"", width:"", left: "left-44", top: "top-4"})
const mailIconLayout = new ComponentLayout({height:"", width:"", left:"left-36", color:"#0E4749"});

export default function HomeLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <HomeScreenHeader title={headerDetails.title} imageDetail={headerDetails.imageDetail}/>
            }}/>
            <Stack.Screen name="dailyDevotions" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="about" options={{
                header: () => <GeneralScreenHeader title="About" backButtonTitle="Home" backButtonLayout={buttonLayout} backIconLayout={iconLayout} titleLayout={titleLayout} mailIconLayout={mailIconLayout}/>
            }}/>
        </Stack>
    );
}