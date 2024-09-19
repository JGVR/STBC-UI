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
const StyledText = styled(Text);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"top-24", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-28", size:"text-xl", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", bottom:"bottom-[20%]", left:"left-[88%]", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});
const itemImgLayout = "h-10 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mb-1";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-2"
const data = [
    {
        title: "Ministries",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: ""
    },
    {
        title: "Sunday School",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: ""
    },
    {
        title: "Children's Church",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: ""
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
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Connect' headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledView className='bg-midnight-green h-3/4 w-full'>
                <ItemsList data={data} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={false}/>
            </StyledView>
        </StyledView>
    );
}