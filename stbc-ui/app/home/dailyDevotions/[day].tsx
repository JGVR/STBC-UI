import {View, Text, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/loadingScreen';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);

export default function DevotionScreen(){
    const [isCompleted, setIsCompleted] = useState(false);
    const [devotions, setDevotions] = useState([]);
    const url = "http://192.168.1.15:8000/find?type=devotion&churchId=1";
    const {day} = useLocalSearchParams();
    const router = useRouter();
    
    useEffect(() => {
        fetch(url).then(
            response => {
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }
        ).then(data => {
            setDevotions(data);
            setIsCompleted(true);
        })
        .catch(error => {
            console.error(`Something went wrong with the API request ${error}`);
            setIsCompleted(false);
        })
    }, [])

    if(isCompleted){
        return(
            <StyledView className='h-[100%]'>
                <BgImageScreenHeader router={router} buttonTitle='Devotions' headerTitle={devotions.length > 0 ? devotions[1]["title"] : ""} headerOptionalMsg={devotions.length > 0 ? devotions[1]["memberId"] : null}/>
                <StyledScrollView className="w-full h-80 bg-sky-950 border rounded-tr-2xl rounded-tl-2xl overflow-hidden">
                    <StyledView className="w-full">
                        <StyledText className="text-white m-3 text-center italic font-bold text-lg">
                            {`${devotions[1]["message"]}`}
                        </StyledText>
                    </StyledView>
                </StyledScrollView>
            </StyledView>
        );
    }
    return(
        <LoadingScreen/>
    );
}