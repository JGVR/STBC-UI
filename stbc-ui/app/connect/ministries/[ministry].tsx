import {View, Text, StatusBar, Pressable, Linking, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';
import SectionHeader from '@/components/SectionHeader';
import ComponentLayout from '@/utils/ComponentLayout';
import Ministry from '@/model/Ministry';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledScrollView = styled(ScrollView);

const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const subContainerLayout = new ComponentLayout({height:"flex-row flex-wrap", width:"", top:"mt-7"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"ml-5", top:"mt-[17%]", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"w-52", top:"-mt-[50%]", bottom:"mb-3", size:"text-lg", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", top:"-mt-48", left:"ml-96", color:"white"});
const iconLayout = new ComponentLayout({height:"", width:"", top:"-mt-[175%]", left:"ml-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"-mt-[180%]", left:"-ml-2", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});

export default function MinistryScreen(){
    const {data} = useLocalSearchParams();
    const ministry = typeof data === "string" ? JSON.parse(data) as Ministry : null;
    const headerTitle = ministry?.name;
    const registerUrl = typeof ministry?.url === 'string' ? ministry.url : "";
    const router = useRouter();

    const handlePress = async () => {
        try{
            await Linking.openURL(registerUrl);
        }catch(error){
            console.error(`Something went wrong: ${error}`)
        }
    };

    useEffect(() => {
        StatusBar.setBarStyle('light-content');

        return () => {
            StatusBar.setBarStyle('dark-content');
        }
    }, [])

    return(
        <StyledView className="bg-midnight-green h-full w-full">
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={true} buttonTitle="Ministries" backButtonLayout={buttonLayout} backIconLayout={iconLayout} headerTitle="" headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} subContainerLayout={subContainerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout} imageButtonData="" thumbNailUrl="" thumbnailLayout={new ComponentLayout({height:"", width:""})}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledScrollView className="w-full mt-[49%]">
                <SectionHeader title={headerTitle ? headerTitle : ""} containerLayout='flex-row flex-nowrap' titleLayout='text-xl text-white mt-3 mb-5 ml-6 font-bold italic' iconLayout='mt-3'/>
                <StyledView className='bg-teal-500 h-12 w-96 rounded-3xl  ml-6'>
                    <StyledPressable className='m-2 h-8' onPress={handlePress}>
                        <StyledText className='text-center text-xl font-semibold text-white'>Register</StyledText>
                    </StyledPressable>
                </StyledView>
                <StyledView className="m-4">
                    <SectionHeader title='Description' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-5 ml-2 font-bold italic' iconLayout='mt-6'/>
                    <StyledText className="text-white text-lg m-4">
                        {ministry?.description}
                    </StyledText>
                </StyledView>
            </StyledScrollView>
        </StyledView>
    );
}