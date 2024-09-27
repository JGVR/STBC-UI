import {View, Text} from 'react-native';
import { styled } from 'nativewind';
import { useEffect, useState } from 'react';
import ItemsList from '@/components/ItemsList';
import Item from '@/components/Item';
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
    const [maxDocs, setMaxDocs] = useState(5);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [docNum, setDocNum] = useState(0);
    const [ministries, setMinistries] = useState<Ministry[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const fetchMinistries = async(newDocNum: number) => {
        try{
            const apiUrl = `http://192.168.1.6:8000/find?type=ministry&churchId=1&maxDocs=${maxDocs}&recordId=${newDocNum}`;
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
                    return newMinistry
                });
                setMinistries(prevData => [...prevData, ...ministries]);
                setIsCompleted(true);
            }
            else{
                setHasMoreData(false);
            }
        }catch(error: any) {
            console.log(`Something went wrong! ${error}`);
        }
    };

    //Extract 5 more ministries once the user reaches the end of the list
    const handleLoadMoreData = () => {
        if(isCompleted && hasMoreData){
            setDocNum((prevDocNum) => {
                const newDocNum = prevDocNum + 5;
                fetchMinistries(newDocNum);
                return newDocNum
            });
            console.log(docNum);
        };
    };
 
    useEffect(() => {
        fetchMinistries(docNum);
    }, []);

    if(isCompleted){
        return(
            <StyledView className='bg-midnight-green h-full w-full'>
                <ItemsList data={ministries} imageLayout={itemImgLayout} containerLayout={containerLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true} isDynamicList={true} handleMoreData={handleLoadMoreData} hasMoreData={hasMoreData}/>
            </StyledView>
        );
    };
    return <LoadingScreen/>;
}