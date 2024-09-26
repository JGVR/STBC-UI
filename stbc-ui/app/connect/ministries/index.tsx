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


export default function MinistriesScreen(){
    const [maxDocs, setMaxDocs] = useState(5);
    const apiUrl = `http://192.168.1.9:8000/find?type=ministry&churchId=1&maxDocs=${maxDocs}`;
    const [ministries, setMinistries] = useState<Ministry[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const fetchMinistries = async() => {
        try{
            const resp = await fetch(apiUrl)
            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();
            const ministries = data.map((ministry: any) => {
                const newMinistry = new Ministry({
                    id: ministry["id"],
                    name: ministry["name"],
                    description: ministry["description"],
                    imageUrl: ministry["imageUrl"],
                    url: ministry["registerUrl"]
                });
                return newMinistry
            });
            setMinistries(prevData => [...prevData, ...ministries]);
            setIsCompleted(true);
            console.log(ministries[0].name);
            console.log(data[0].name);
        }catch(error: any) {
            console.log(`Something went wrong! ${error}`);
            setIsCompleted(false);
        }
    }

    //Extract 5 more ministries once the user reaches the end of the list
    const handleLoadMoreData = () => {
        if(isCompleted){
            setMaxDocs(maxDocs + 5);
            fetchMinistries();
            console.log(maxDocs);
        }
    }
 
    useEffect(() => {
        fetchMinistries();
    }, []);

    if(isCompleted){
        return(
            <StyledView className='bg-midnight-green h-full w-full'>
                <ItemsList data={ministries} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true} isDynamicList={true} handleMoreData={handleLoadMoreData}/>
            </StyledView>
        );
    };
    return <LoadingScreen/>;
}