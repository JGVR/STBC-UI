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
const subContainerLayout = new ComponentLayout({height:"flex-row flex-wrap", width:"", top:"mt-7"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"ml-5", top:"mt-[17%]", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"w-52", top:"-mt-[50%]", bottom:"mb-3", size:"text-lg", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", top:"-mt-48", left:"ml-96", color:"white"});
const iconLayout = new ComponentLayout({height:"", width:"", top:"-mt-[175%]", left:"ml-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", top:"-mt-[180%]", left:"-ml-2", color:"white"});
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
        <StyledView className="bg-midnight-green h-full w-full">
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={true} buttonTitle="Ministries" backButtonLayout={buttonLayout} backIconLayout={iconLayout} headerTitle={headerTitle} headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} subContainerLayout={subContainerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledScrollView className="w-full mt-[49%]">
                <StyledView className='bg-teal-500 h-16 w-52 rounded-2xl  ml-28'>
                    <StyledPressable className='m-4 h-12' onPress={handlePress}>
                        <StyledText className='text-center text-lg font-semibold text-white'>Register</StyledText>
                    </StyledPressable>
                </StyledView>
                <StyledView className="m-4">
                    <StyledText className="text-white text-lg m-1">
                        {description}
                    </StyledText>
                </StyledView>
            </StyledScrollView>
        </StyledView>
    );
}