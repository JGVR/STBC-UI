import {View, Text, Image, ScrollView, Pressable, StatusBar} from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import School from '@/model/School';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';
import SectionHeader from '@/components/SectionHeader';
import Member from '@/model/Member';
import ChurchClass from '@/model/ChurchClass';
import DetailModal from '@/components/DetailModal';
import LoadingScreen from '@/components/loadingScreen';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);
const apiUrl = `${process.env.EXPO_PUBLIC_STBC_API}type=school&churchId=1&schoolId=1`;

const containerLayout = new ComponentLayout({height:"h-60", width:"w-full"});
const subContainerLayout = new ComponentLayout({height: "", width: ""});
const iconLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[48.5%]", left:"left-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[50.5%]", right:"right-[5%]", color:"white"});
const imageLayout = new ComponentLayout({height:"h-64", width:"w-full", opacity:"opacity-80", bottom:"bottom-1"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-48", size:"text-4xl", color:"text-white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-48", left:"left-36", size:"text-lg", color: "text-white"});

export default function ChildrenChurchScreen(){
    const [school, setSchool] = useState<School[]>([]);
    const [members, setMembers] = useState<Member[]>([]);
    const chosenMember = useRef<Member>();
    const [isCompleted, setIsCompleted] = useState(false);
    const router = useRouter();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const fetchSchool = async() => {
        try{
            const resp = await fetch(apiUrl);

            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();

            const childrenSchool = data.map((school: any) => {
                const newSchool = new School({
                    id: school["schoolId"],
                    name: school["name"],
                    shortDescription: school["shortDescription"],
                    description: school["description"],
                    dateOfWeek: school["dateOfWeek"],
                    time: school["time"],
                    imageUrl: school["imageUrl"],
                    classes: school["classes"].map((churchClass: any) => {
                        const newChurchClass = new ChurchClass({
                            memberIds: churchClass["memberIds"],
                            name: churchClass["name"],
                            ages: churchClass["ages"],
                            imageUrl: school["imageUrl"]
                        });
                        return newChurchClass;
                    })
                });
                return newSchool;
            });
            setSchool(childrenSchool);
        }catch(error){
            console.log("something went wrong!" + error);
        }
    };

    //fetch members data
    const fetchMembers = async(id: string) => {
        try{
            const apiUrl = `${process.env.EXPO_PUBLIC_STBC_API}type=member&churchId=1&memberId=${id}`;
            const resp = await fetch(apiUrl);

            if(!resp.ok){
                throw new Error("Something went wrong with the API request");
            }
            const data = await resp.json();

            const members = data.map((member: any) => {
                const newMember = new Member({
                    id: member["memberId"],
                    firstName: member["firstName"],
                    lastName: member["lastName"],
                    title: member["title"],
                    shortBio: member["shortBio"],
                    imageUrl: member["imageUrl"]
                });
                return newMember;
            });
            setMembers(prevData => [...prevData, ...members]);
            setIsCompleted(true);
        }catch(error){
            console.log("something went wrong!" + error);
        }
    };

    //Handle on press to display member modal
    const handleOnPress = (member: Member) => {
        chosenMember.current = member;
        setIsModalVisible(true);
    }

    //update Status Bar color & fetch children church data
    useEffect(() => {
        //Set Status bar style
        StatusBar.setBarStyle('dark-content');

        if(school.length <= 0){
            fetchSchool();
        }
    }, []);

    //fetch members
    useEffect(() => {
        if(school.length > 0){
            console.log(school[0].classes?.length);
            if(members.length <= 0){
                school[0].classes?.map((churchClass: any) => {
                    churchClass.memberIds.map((memberId: string) => {
                        fetchMembers(memberId);
                    });
                });
            }
        }
    }, [school])

    if(isCompleted){
        return(
            <StyledView className='bg-dark-green'>
                <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-mobile-app-images/Devotion-bg-Image.webp" buttonTitle='Sunday Class' headerTitle={school[0]?.name ? school[0].name : ""} headerOptionalMsg={school[0]?.dateOfWeek && school[0]?.time ? `${school[0].dateOfWeek}|${school[0].time}` : ""} containerLayout={containerLayout} subContainerLayout={subContainerLayout} backButtonLayout={buttonLayout} backIconLayout={iconLayout} backButtonShown={true} imageLayout={imageLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout} imageButtonData="" thumbNailUrl="" thumbnailLayout={new ComponentLayout({height:"", width:""})}/>
                <StyledScrollView className='bg-midnight-green w-full h-[72%]'>
                    <SectionHeader title='Leaders' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-4 mb-2 ml-4 font-bold italic' iconLayout='mt-5'/>
                    <StyledScrollView className="flex-row flex-wrap" horizontal={true} indicatorStyle='white'>
                            {members.map((member, idx) => {
                                return(
                                    <Pressable key={idx} onPress={() => handleOnPress(member)}>
                                        <StyledView className='flex-col flex-wrap rounded-lg h-52 w-36 border-black border-0' >
                                            <StyledImage className='h-32 w-32 ml-3 mt-4' src={member.imageUrl}/>
                                            <StyledText className='text-sm text-white text-center font-bold ml-4 mt-3 h-8 w-32'>{`${member.firstName} ${member.lastName}`}</StyledText>
                                        </StyledView>
                                    </Pressable>
                                );
                            })}
                    </StyledScrollView>
                    <SectionHeader title='Description' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mb-2 ml-4 font-bold italic' iconLayout='mt-1'/>
                    <StyledView className='w-[95%] ml-3 mr-5 mb-3'>
                        <StyledText className='text-lg text-white ml-3 mr-3 mb-2 text-left'>
                            {school[0].shortDescription}
                        </StyledText>
                    </StyledView>
                    <DetailModal isVisible={isModalVisible} member={chosenMember} setIsVisible={setIsModalVisible}/>
                </StyledScrollView>
            </StyledView>
        );
    }
    return <LoadingScreen/>
}