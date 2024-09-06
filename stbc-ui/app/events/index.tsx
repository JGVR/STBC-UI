import {View, Text, StatusBar} from 'react-native';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import { useRouter } from 'expo-router';
import ComponentLayout from '@/utils/ComponentLayout';
import { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';

const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"top-28", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-28", size:"text-xl", color:"text-white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""})

export default function EventsScreen(){
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
        <View>
            <BgImageScreenHeader router={router} backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Upcoming Events' headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
        </View>
    );
}