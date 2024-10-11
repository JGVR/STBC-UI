import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import {styled} from 'nativewind';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import ChurchClass from '@/model/ChurchClass';
import Member from '@/model/Member';
import LoadingScreen from '@/components/loadingScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);
const containerLayout = new ComponentLayout({height:"h-60", width:"w-full"});
const subContainerLayout = new ComponentLayout({height: "", width: ""});
const iconLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[48.5%]", left:"left-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[50.5%]", right:"right-[5%]", color:"white"});
const imageLayout = new ComponentLayout({height:"h-64", width:"w-full", opacity:"opacity-60", bottom:"bottom-1"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-48", size:"text-2xl", color:"text-white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-48", left:"left-40", color: "text-white"});

export default function ClassScreen(){
    const {data} = useLocalSearchParams();
    const router = useRouter();
    const sundayClass = typeof data === "string" ? JSON.parse(data) as ChurchClass: null;
    const apiUrl = "http://192.168.1.12:8000/find?type=member&churchId=1";
    const [members, setMembers] = useState<Member[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const fetchMembers = async(memberId: string) => {
        try{
            const apiUrl = `http://192.168.1.12:8000/find?type=member&churchId=1&memberId=${memberId}`;
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

        //Set Status bar style
        StatusBar.setBarStyle('light-content');
        return () => {
            StatusBar.setBarStyle('dark-content');
        }
    }, [])

    if(isCompleted){
        return(
            <StyledScrollView className='bg-midnight-green h-full w-full'>
                <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-mobile-app-images/Devotion-bg-Image.webp" buttonTitle='Sunday Class' headerTitle={sundayClass?.name ? sundayClass.name : ""} headerOptionalMsg={sundayClass?.ages ? sundayClass.ages : ""} containerLayout={containerLayout} subContainerLayout={subContainerLayout} backButtonLayout={buttonLayout} backIconLayout={iconLayout} backButtonShown={true} imageLayout={imageLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
                <StyledView className='flex-row flex-nowrap'>
                    <StyledText className='text-2xl text-white mt-8 mb-2 ml-2 font-bold italic'>Teacher</StyledText>
                    <StyledView className='mt-9'>
                        <MaterialIcons name="navigate-next" size={30} color="white" />
                    </StyledView>
                </StyledView>
                <StyledScrollView className="flex-row flex-wrap border-white" horizontal={true} indicatorStyle='white'>
                    {members.map((member, idx) => {
                        return(
                            <StyledView className='flex-col flex-wrap rounded-lg h-56 w-36 border-black border-0' key={idx}>
                                <StyledImage className='h-32 w-32 ml-3 mt-4' src={member.imageUrl}/>
                                <StyledText className='text-sm text-white text-center font-bold mt-2 ml-4 h-16 w-32'>{`${member.firstName} ${member.lastName}`}</StyledText>
                            </StyledView>
                        );
                    })}
                </StyledScrollView>
                <StyledView className='flex-row flex-nowrap'>
                    <StyledText className='text-2xl text-white mb-2 ml-2 font-bold italic'>Description</StyledText>
                    <StyledView className='mt-1'>
                        <MaterialIcons name="navigate-next" size={30} color="white" />
                    </StyledView>
                </StyledView>
                <StyledView className='w-[95%] mt-3 ml-3 mr-5 mb-3 text-center bg-white rounded-xl'>
                    <StyledText className='text-lg text-dark-green m-3 text-center'>
                        This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. I will repeat the same stuff for design purpose. This is where the description of the course will go. This is where the description of the course will go. I will repeat the same stuff for design purpose.
                    </StyledText>
                </StyledView>
            </StyledScrollView>
        );
    };
    return <LoadingScreen/>;
}