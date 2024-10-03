import {View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import ChurchClass from '@/model/ChurchClass';
import Member from '@/model/Member';
import LoadingScreen from '@/components/loadingScreen';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function ClassScreen(){
    const {data} = useLocalSearchParams();
    const sundayClass = typeof data === "string" ? JSON.parse(data) as ChurchClass: null;
    const apiUrl = "http://172.20.10.2:8000/find?type=member&churchId=1";
    const [member, setMembers] = useState<Member[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const fetchMembers = async() => {
        try{
            const apiUrl = `http://172.20.10.2:8000/find?type=member&churchId=1&memberId=${sundayClass?.memberIds[0]}`;
            const resp = await fetch(apiUrl);

            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();
            console.log(data[0]);

            if(data.length >= 1){
                const members = data.map((member: any) => {
                    const newMember= new Member({
                        id: member["memberId"],
                        firstName: member["firstName"],
                        lastName: member["lastName"],
                        title: member["title"],
                        imageUrl: member["imageUrl"]
                    });
                    return newMember;
                });
                setMembers(prevData => [...prevData, ...members]);
                setIsCompleted(true);
            }
        }catch(error){
            console.log("something went wrong!" + error)
        }
    }

    useEffect(() => {
        fetchMembers();
    }, [])

    if(isCompleted){
        return(
            <StyledView className='bg-midnight-green h-full w-full'>
                <StyledView className="flex-col flex-wrap border-b-2 border-white">
                    <StyledText className='text-2xl text-white text-center font-bold ml-36 mt-5'>{sundayClass?.name}</StyledText>
                    <StyledText className='text-lg text-white text-center font-bold mt-1 ml-36 mb-1'>{sundayClass?.ages}</StyledText>
                </StyledView>
                <StyledView className="flex-col flex-wrap border-b-2 border-white">
                    <StyledText className='text-2xl text-white text-center font-bold ml-36 mt-5'>{`${member[0].firstName} ${member[0].lastName}`}</StyledText>
                    <StyledImage src={member[0].imageUrl}/>
                </StyledView>
            </StyledView>
        );
    };
    return <LoadingScreen/>;
}