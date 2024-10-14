import {View, Text, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/loadingScreen';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';
import Devotion from '@/model/Devotion';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full"});
const subContainerLayout = new ComponentLayout({height: "", width: ""});
const iconLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[48.5%]", left:"left-3", color:"#0E4749"});
const buttonLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[50.5%]", right:"right-[5%]", color:"#0E4749"});
const imageLayout = new ComponentLayout({height:"h-64", width:"w-full", opacity:"opacity-60", bottom:"bottom-1"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-52", size:"text-2xl", color:"text-midnight-green"});
const optionalMsgLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-40", left:"left-2", color: "text-midnight-green"});

export default function DevotionScreen(){
    const [isCompleted, setIsCompleted] = useState(false);
    const [devotions, setDevotions] = useState<Devotion>();
    const {day} = useLocalSearchParams();
    const url = `http://192.168.1.12:8000/find?type=devotion&churchId=1&weekDay=${day}`;
    const router = useRouter();
    
    //Extract the correct devotion from STBC-Api
    useEffect(() => {
        fetch(url).then(
            response => {
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }
        ).then(data => {
            setDevotions(new Devotion(data[0].title, data[0].message, data[0].memberId.toString(), data[0].weekDay));
            setIsCompleted(true);
        })
        .catch(error => {
            console.error(`Something went wrong with the API request ${error}`);
            setIsCompleted(false);
        })
    }, [])

    //Render content once the API request has been fulfilled
    if(isCompleted){
        return(
            <StyledView className='h-[100%]'>
                <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-mobile-app-images/Devotion-bg-Image.webp" buttonTitle='Devotions' headerTitle={devotions ? devotions.title : ""} headerOptionalMsg={devotions ? devotions.author : ""} containerLayout={containerLayout} subContainerLayout={subContainerLayout} backButtonLayout={buttonLayout} backIconLayout={iconLayout} backButtonShown={true} imageLayout={imageLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
                <StyledScrollView className="w-full h-80 bg-dark-green rounded-tr-2xl rounded-tl-2xl overflow-hidden">
                    <StyledView className="w-full">
                        <StyledText className="text-white m-3 text-center text-base">
                            {`${devotions ? devotions.message : null}`}
                        </StyledText>
                    </StyledView>
                </StyledScrollView>
            </StyledView>
        );
    }

    //Render loading screen while API request is in process
    return(
        <LoadingScreen/>
    );
}