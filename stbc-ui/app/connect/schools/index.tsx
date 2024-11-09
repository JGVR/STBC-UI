import {View, Text} from 'react-native';
import { styled } from 'nativewind';
import { useEffect, useState } from 'react';
import ItemsList from '@/components/ItemsList';
import ChurchClass from '@/model/ChurchClass';
import LoadingScreen from '@/components/loadingScreen';

const StyledView = styled(View);
const itemImgLayout = "h-14 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mt-2";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-4";
const containerLayout = "h-[95%] w-full";

export default function SundaySchoolsScreen(){
    const [classes, setClasses] = useState<ChurchClass[]>([]);
    const [docNum, setDocNum] = useState(5);
    const [isCompleted, setIsCompleted] = useState(false);
    
    const fetchSundaySchoolClasses = async() => {
        try{
            const apiUrl = `${process.env.EXPO_PUBLIC_STBC_API}type=school&churchId=1`;
            const resp = await fetch(apiUrl);

            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();

            if(data.length >= 1){
                const sundayClasses = data[0]["classes"].map((sundayClass: any) => {
                    const newSundayClass = new ChurchClass({
                        memberIds: sundayClass["memberIds"],
                        name: sundayClass["name"],
                        ages: sundayClass["ages"],
                        imageUrl: "https://stbc.blob.core.windows.net/stbc-mobile-app-images/strong-tower.png"
                    });
                    return newSundayClass;
                });
                //Increase docNum by the amout of data pulled from the API
                setDocNum((prevDocNum) => {
                    return prevDocNum + data.length;
                });
                setClasses(prevData => [...prevData, ...sundayClasses]);
                setIsCompleted(true);
            }
        }catch(error){
            console.log("something went wrong!" + error)
        }
    };

    useEffect(() => {
        fetchSundaySchoolClasses();
    }, [])

    if(isCompleted){
        return(
            <StyledView className='bg-midnight-green h-full w-full'>
                    <ItemsList data={classes} imageLayout={itemImgLayout} containerLayout={containerLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={true} isDynamicList={false} onScroll="" isLoading={false}/>
            </StyledView>
        );
    };
    return <LoadingScreen/>;
}