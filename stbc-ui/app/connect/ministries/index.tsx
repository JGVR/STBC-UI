import {View, Text} from 'react-native';
import { styled } from 'nativewind';
import { useEffect, useState } from 'react';
import ItemsList from '@/components/ItemsList';
import Item from '@/components/Item';
import Ministry from '@/model/Ministry';
import LoadingScreen from '@/components/loadingScreen';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const apiUrl = "http://192.168.1.8:8000/find?type=ministry&churchId=1";
const itemImgLayout = "h-14 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mt-2";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-4";


export default function MinistriesScreen(){
    const [ministries, setMinistries] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        fetch(apiUrl).then(response => {
            if(!response.ok){
                throw new Error("Something went wrong with the API request");
            }
            return response.json();
        }).then(data => {
            const ministries = data.map((ministry: any) => {
                const newMinistry = new Ministry({
                    name: ministry["name"],
                    description: ministry["description"],
                    imageUrl: ministry["imageUrl"],
                    url: ministry["registerUrl"]
                });
                return {
                    ...newMinistry,
                    startDate: "",
                    endDate: "",
                    targetScreen: `connect/ministries`
                };
            });
            setMinistries(ministries);
            setIsCompleted(true);
        }).catch(error => {
            console.log(`Something went wrong! ${error}`);
            setIsCompleted(false);
        })
    }, []);

    if(isCompleted){
        return(
            <StyledView className='bg-midnight-green h-full w-full'>
                <ItemsList data={ministries} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true}/>
            </StyledView>
        );
    };
    return <LoadingScreen/>;
}