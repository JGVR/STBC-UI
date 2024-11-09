import {View} from 'react-native';
import { styled } from 'nativewind';
import { useEffect, useState, useRef } from 'react';
import ItemsList from '@/components/ItemsList';
import Ministry from '@/model/Ministry';
import LoadingScreen from '@/components/loadingScreen';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const itemImgLayout = "h-14 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mt-2";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-4";
const containerLayout = "h-[95%] w-full";

export default function MinistriesScreen(){
    const scrollPosition = useRef(0);
    const [loadingMore, setIsLoadingMore] = useState(false);
    const [maxDocs, setMaxDocs] = useState(10);
    const [docNum, setDocNum] = useState(0);
    const [ministries, setMinistries] = useState<Ministry[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    //fetch ministries
    const fetchMinistries = async(newDocNum: number) => {
        try{
            const apiUrl = `${process.env.EXPO_PUBLIC_STBC_API}type=ministry&churchId=1&maxDocs=${maxDocs}&recordId=${newDocNum}`;
            const resp = await fetch(apiUrl);
            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();

            if(data.length >= 1){
                const ministries = data.map((ministry: any) => {
                    const newMinistry = new Ministry({
                        id: ministry["recordId"],
                        name: ministry["name"],
                        description: ministry["description"],
                        imageUrl: ministry["imageUrl"],
                        url: ministry["registerUrl"]
                    });
                    return newMinistry;
                });

                //Increase docNum by the amout of data pulled from the API
                setDocNum((prevDocNum) => {
                    return prevDocNum + data.length;
                });
                setMinistries(prevData => [...prevData, ...ministries]);
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
            fetchMinistries(docNum);
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
 
    //Trigger the fetchMinistries upon screen rendering
    useEffect(() => {
        fetchMinistries(docNum);
    }, []);

    if(isCompleted){
        return(
            <StyledView className='bg-midnight-green h-full w-full'>
                <ItemsList data={ministries} imageLayout={itemImgLayout} containerLayout={containerLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true} isDynamicList={true} onScroll={handleScroll} isLoading={loadingMore}/>
            </StyledView>
        );
    };
    return <LoadingScreen/>;
}