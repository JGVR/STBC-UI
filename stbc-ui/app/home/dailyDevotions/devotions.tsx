import {View, Text, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/loadingScreen';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);

export default function DevotionScreen(){
    const [isCompleted, setIsCompleted] = useState(false);
    const [devotions, setDevotions] = useState([])
    const url = "http://10.0.0.133:8000/find?type=devotion&churchId=1"
    
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
            <StyledView className='mt-56 h-[100%] border rounded-2xl overflow-hidden z-50'>
                <StyledScrollView className="w-full h-full bg-sky-950">
                    <StyledView className="w-full">
                        <StyledText className="text-white mt-6 ml-2 mr-2 mb-60 text-center italic font-bold text-lg">
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