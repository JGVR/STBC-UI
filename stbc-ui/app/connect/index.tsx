import {View, Text, StatusBar} from 'react-native';
import { styled } from 'nativewind';
import { useRouter, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import ComponentStyle from '@/utils/ComponentStyle';
import ComponentLayout from '@/utils/ComponentLayout';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';
import ItemsList from '@/components/ItemsList';

const StyledView = styled(View);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const subContainerLayout = new ComponentLayout({height:"flex-row flex-wrap", width:"", top:"mt-7"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"ml-5", top:"mt-[14%]", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", top:"-mt-[46%]", left:"ml-44", size:"text-xl", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", bottom:"-mt-[45%]", left:"ml-96", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});
const itemImgLayout = "h-10 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mb-1";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-2";
const itemListContainerLayout = "h-[95%] w-full";
const data = [
    {
        title: "Ministries",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: "",
        targetScreen: "connect/ministries"
    },
    {
        title: "Sunday School",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: "",
        targetScreen: "connect/schools"
    },
    {
        title: "Children's Church",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: "",
        targetScreen: "connect/childrenChurch"
    }
]

export default function ConnectTab(){
    const router = useRouter();

    useFocusEffect(
        useCallback(() => {
            // Set the status bar to light-content when the screen is focused
            StatusBar.setBarStyle('light-content');

            // When the screen loses focus, set it back to dark-content
            return () => {
                StatusBar.setBarStyle('dark-content');
            };
        }, [])
    );

    return(
        <StyledView className="bg-midnight-green">
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Connect' headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} subContainerLayout={subContainerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout} thumbNailUrl="" imageButtonData="" thumbnailLayout={new ComponentLayout({height:"", width:""})}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledView className='bg-midnight-green h-[80%] w-full mt-[42%]'>
                <ItemsList data={data} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={false} isDynamicList={false} onScroll="" containerLayout={itemListContainerLayout} isLoading={false}/>
            </StyledView>
        </StyledView>
    );
}