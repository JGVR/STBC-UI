import {View, Text, StatusBar} from 'react-native';
import {styled} from 'nativewind';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledText = styled(Text);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"top-24", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-28", size:"text-xl", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", top:"bottom-[21%]", left:"left-[88%]", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});

export default function Ministry(){
    const {title, description} = useLocalSearchParams();
    const headerTitle = typeof title === 'string' ? title : "";
    const router = useRouter();

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
    }, [])

    return(
        <StyledView className="bg-midnight-green h-full w-full">
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={true} buttonTitle="Ministries" backButtonLayout="" backIconLayout="" headerTitle={headerTitle} headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledView className="h-[80%] m-4">
                <StyledText className="text-white text-lg m4">
                    {description}
                </StyledText>
            </StyledView>
        </StyledView>
    );
}