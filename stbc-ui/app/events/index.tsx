import {View, StatusBar} from 'react-native';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import { useRouter } from 'expo-router';
import ComponentLayout from '@/utils/ComponentLayout';
import { useCallback, useState, useRef, useEffect } from 'react';
import { useFocusEffect } from 'expo-router';
import { styled } from 'nativewind';
import ItemsList from '@/components/ItemsList';
import MailHeaderIcon from '@/components/headers/MailHeaderIcon';
import LoadingScreen from '@/components/loadingScreen';
import Event from '@/model/Event';

const StyledView = styled(View);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full", color:"bg-dark-green"});
const subContainerLayout = new ComponentLayout({height:"flex-row flex-wrap", width:"", top:"mt-7"});
const imageLayout = new ComponentLayout({height: "h-40", width: "w-96", left:"left-6", top:"mt-16", border:"border rounded-2xl"});
const titleLayout = new ComponentLayout({height:"", width:"", top:"-mt-52", bottom:"mb-4", left:"ml-[30%]", size:"text-xl", color:"text-white"});
const mailHeaderLayout = new ComponentLayout({height: "h-6", width:"w-8", bottom:"bottom-[20%]", left:"left-[88%]", color:"white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:""});
const itemImgLayout = "h-14 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mb-1";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-4";
const itemListContainerLayout = "h-[95%] w-full";

export default function EventsScreen(){
    const scrollPosition = useRef(0);
    const [loadingMore, setIsLoadingMore] = useState(false);
    const [maxDocs, setMaxDocs] = useState(10);
    const [docNum, setDocNum] = useState(0);
    const router = useRouter();
    const [events, setEvents] = useState<Event[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const fetchEvents = async(newDocNum: number) => {
        try{
            const apiUrl = `${process.env.EXPO_PUBLIC_STBC_API}type=event&churchId=1&maxDocs=${maxDocs}&recordId=${newDocNum}`;
            const resp = await fetch(apiUrl);
            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();

            if(data.length >= 1){
                const events = data.map((event: any) => {
                    const newEvent = new Event({
                        id: event["recordId"],
                        title: event["title"],
                        description: event["description"],
                        startDate: event["startDate"],
                        endDate: event["endDate"],
                        url: event["eventUrl"],
                        imageUrl: event["imageUrl"],
                        location: event["location"],
                        targetScreen: "events"
                    });
                    return newEvent;
                });
                setDocNum((prevDocNum) => {
                    return prevDocNum + data.length;
                });
                setEvents(prevData => [...prevData, ...events]);
                setIsCompleted(true);
            }
        }catch(error){
            console.log("something went wrong!" + error);
        }finally{
            setIsLoadingMore(false);
        }
    };

    //Extract more ministries once the user reaches the end of the list
    const handleMoreData = () => {
        if (loadingMore) return;
        setIsLoadingMore(true);
        if(isCompleted){
            fetchEvents(docNum); 
        };
    };

    // Track user's scroll to determine if they are scrolling down
    const handleScroll = (event: any) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const scrollingDown = currentOffset > scrollPosition.current; // Check if user is scrolling down
        scrollPosition.current = currentOffset;

        if (scrollingDown) {
            // If the user is scrolling down and near the end, trigger handleMoreData
            const isNearBottom =
                event.nativeEvent.layoutMeasurement.height + currentOffset >=
                event.nativeEvent.contentSize.height - 50;
            if (isNearBottom) {
                handleMoreData();
            };
        };
    };

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
            if(!isCompleted){
                fetchEvents(docNum);
            }
        }, [isCompleted])
    );

    if(isCompleted){
        return(
            <StyledView className="bg-midnight-green">
                <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-events/Homecoming 2024" backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Upcoming Events' headerOptionalMsg="" imageLayout={imageLayout} containerLayout={containerLayout} subContainerLayout={subContainerLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
                <MailHeaderIcon layoutDetails={mailHeaderLayout}/>
                <StyledView className='bg-midnight-green h-3/4 w-full'>
                    <ItemsList data={events} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true} isLoading={loadingMore} onScroll={handleScroll} containerLayout={itemListContainerLayout} isDynamicList={true}/>
                </StyledView>
            </StyledView>
        );
    }

    return <LoadingScreen/>;
}