import {View, StatusBar} from 'react-native';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import { useRouter } from 'expo-router';
import ComponentLayout from '@/utils/ComponentLayout';
import { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { styled } from 'nativewind';
import ItemsList from '@/components/ItemsList';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';

const StyledView = styled(View);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"top-24", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-28", size:"text-xl", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", bottom:"bottom-[20%]", left:"left-[88%]", color:"white"})
const optionalMsgLayout = new ComponentLayout({height:"", width:""});
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      screenUrl: "/events/event",
      optionalMsg: "Wed, Sep 4 • 6:30pm - 7:30pm"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      screenUrl: "/events/event",
      optionalMsg: "Mon, Sep 9 • 6:30pm - 7:30pm"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      screenUrl: "/events/event",
      optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Fourth Item',
      screenUrl: "/events/event",
      optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Fifth Item',
        screenUrl: "/events/event",
        optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Sixth Item',
        screenUrl: "/events/event",
        optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Seventh Item',
        screenUrl: "/events/event",
        optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: 'eithth Item',
        screenUrl: "/events/event",
        optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d80',
        title: 'nineth Item',
        screenUrl: "/events/event",
        optionalMsg: "Thur, Sep 12 • 6:30pm - 7:30pm"
    },
];
const itemImgLayout = "h-14 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mb-1";
const itemOptMsgLayout = "h-5 text-white"

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
        <StyledView className="bg-midnight-green">
            <BgImageScreenHeader router={router} backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Upcoming Events' headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
            <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
            <StyledView className='bg-midnight-green h-3/4 w-full'>
                <ItemsList data={DATA} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} optionalMsgLayout={itemOptMsgLayout}/>
            </StyledView>
        </StyledView>
    );
}