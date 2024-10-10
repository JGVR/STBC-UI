import {View, Text, Image, ScrollView} from 'react-native';
import {styled} from 'nativewind';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import ChurchClass from '@/model/ChurchClass';
import Member from '@/model/Member';
import LoadingScreen from '@/components/loadingScreen';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);

export default function ClassScreen(){
    const {data} = useLocalSearchParams();
    const sundayClass = typeof data === "string" ? JSON.parse(data) as ChurchClass: null;
    const apiUrl = "http://192.168.1.6:8000/find?type=member&churchId=1";
    const [members, setMembers] = useState<Member[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const fetchMembers = async(memberId: string) => {
        try{
            const apiUrl = `http://192.168.1.6:8000/find?type=member&churchId=1&memberId=${memberId}`;
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
    };

    useEffect(() => {
        if(members.length <= 0){
            sundayClass?.memberIds.map((memberId: string) => fetchMembers(memberId));
        };
    }, [])

    if(isCompleted){
        return(
            <StyledScrollView className='bg-midnight-green h-full w-full'>
                <StyledView>
                    <StyledText className='text-2xl text-white mt-4 ml-2 font-bold italic'>Class</StyledText>
                </StyledView>
                <StyledView className="flex-col flex-wrap bg-white rounded-lg mt-5 ml-3 w-[95%]">
                    <StyledText className='text-2xl text-dark-green text-center font-bold ml-28 mt-2'>{sundayClass?.name}</StyledText>
                    <StyledText className='text-base text-dark-green text-center font-bold mt-1 ml-32 mb-1'>{sundayClass?.ages}</StyledText>
                </StyledView>
                <StyledView>
                    <StyledText className='text-2xl text-white mt-8 mb-2 ml-2 font-bold italic'>Teacher</StyledText>
                </StyledView>
                <StyledView className="flex-row flex-wrap border-white">
                    {members.map((member, idx) => {
                        return(
                            <StyledView className='flex-col flex-wrap ml-3 mr-2 bg-white rounded-lg h-96 w-48' key={idx}>
                                <StyledText className='text-lg text-dark-green text-center font-bold mt-2 ml-4 h-16 w-40'>{`${member.firstName} ${member.lastName}`}</StyledText>
                                <StyledImage className='h-44 w-44 ml-2' src={member.imageUrl}/>
                            </StyledView>
                        );
                    })}
                </StyledView>
                <StyledView className='mt-5 ml-5 mr-5 mb-3 text-center'>
                    <StyledText className='text-lg text-white'>
                        This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose.
                    </StyledText>
                </StyledView>
            </StyledScrollView>
        );
    };
    return <LoadingScreen/>;
}