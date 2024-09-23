import {View, Text, StatusBar, Pressable, Linking, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledScrollView = styled(ScrollView);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"top-24", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"w-40", bottom:"bottom-[65%]", size:"text-xl", color:"text-white", left:"left-[30%]"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", top:"bottom-[37.5%]", left:"left-[88%]", color:"white"});
const iconLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[25%]", left:"left-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[26.5%]", right:"right-[5%]", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});

export default function Ministry(){
    const {title, description, url} = useLocalSearchParams();
    const headerTitle = typeof title === 'string' ? title : "";
    const registerUrl = typeof url === 'string' ? url : "";
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
        <StyledScrollView className="bg-midnight-green h-full w-full">
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={true} buttonTitle="Ministries" backButtonLayout={buttonLayout} backIconLayout={iconLayout} headerTitle={headerTitle} headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledView className='bg-teal-500 h-16 w-52 rounded-2xl mt-5 ml-28'>
                <StyledPressable className='m-4 h-12' onPress={handlePress}>
                    <StyledText className='text-center text-lg font-semibold text-white'>Register</StyledText>
                </StyledPressable>
            </StyledView>
            <StyledView className="h-[80%] m-4">
                <StyledText className="text-white text-lg m4">
                    {description}
                </StyledText>
            </StyledView>
        </StyledScrollView>
    );
}