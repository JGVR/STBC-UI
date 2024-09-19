import {View, StatusBar} from 'react-native';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import { useRouter } from 'expo-router';
import ComponentLayout from '@/utils/ComponentLayout';
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { styled } from 'nativewind';
import ItemsList from '@/components/ItemsList';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';
import LoadingScreen from '@/components/loadingScreen';
import Event from '@/model/Event';

const StyledView = styled(View);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"top-24", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-28", size:"text-xl", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", bottom:"bottom-[20%]", left:"left-[88%]", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});
const apiUrl = "http://10.0.0.134:8000/find?type=event&churchId=1";
const itemImgLayout = "h-14 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mb-1";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-4";

export default function EventsScreen(){
    const router = useRouter();
    const [events, setEvents] = useState<Event[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    //Set Status Bar
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

    //Extract events
    useFocusEffect(
        useCallback(() => {
            fetch(apiUrl).then(response => {
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                const events = data.map((event: any) => {
                    return {
                        ...event,
                        targetScreen: "events"
                    };
                });
                setEvents(events);
                setIsCompleted(true);
            }).catch(error => {
                console.log(`Something went wrong with the API request ${error}`);
                setIsCompleted(false);
            })
        }, [])
    );

    if(isCompleted){
        return(
            <StyledView className="bg-midnight-green">
                <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Upcoming Events' headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
                <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
                <StyledView className='bg-midnight-green h-3/4 w-full'>
                    <ItemsList data={events} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true}/>
                </StyledView>
            </StyledView>
        );
    }

    return <LoadingScreen/>;
}