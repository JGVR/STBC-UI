import {View, Text, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import School from '@/model/School';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import ComponentLayout from '@/utils/ComponentLayout';
import SectionHeader from '@/components/SectionHeader';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const apiUrl = "http://192.168.1.12:8000/find?type=school&churchId=1&schoolId=1";

const containerLayout = new ComponentLayout({height:"h-60", width:"w-full"});
const subContainerLayout = new ComponentLayout({height: "", width: ""});
const iconLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[48.5%]", left:"left-3", color:"white"});
const buttonLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-[50.5%]", right:"right-[5%]", color:"white"});
const imageLayout = new ComponentLayout({height:"h-64", width:"w-full", opacity:"opacity-70", bottom:"bottom-1"});
const titleLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-48", size:"text-4xl", color:"text-white"});
const optionalMsgLayout = new ComponentLayout({height:"", width:"", bottom:"bottom-48", left:"left-36", size:"text-lg", color: "text-white"});

export default function ChildrenChurchScreen(){
    const [school, setSchool] = useState<School[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const router = useRouter();

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
                    classes: school["classes"]
                });
                return newSchool;
            });
            setSchool(childrenSchool);
            setIsCompleted(true);
        }catch(error){
            console.log("something went wrong!" + error);
        }
    };

    useEffect(() => {
        fetchSchool();
    }, []);

    return(
        <StyledScrollView className='bg-dark-green w-full h-full'>
            <BgImageScreenHeader router={router} imageUrl="https://stbc.blob.core.windows.net/stbc-mobile-app-images/Devotion-bg-Image.webp" buttonTitle='Sunday Class' headerTitle={school[0]?.name ? school[0].name : "ok"} headerOptionalMsg={school[0]?.dateOfWeek && school[0]?.time ? `${school[0].dateOfWeek}|${school[0].time}` : ""} containerLayout={containerLayout} subContainerLayout={subContainerLayout} backButtonLayout={buttonLayout} backIconLayout={iconLayout} backButtonShown={true} imageLayout={imageLayout} titleLayout={titleLayout} optionalMsgLayout={optionalMsgLayout}/>
            <SectionHeader title='Leaders' containerLayout='flex-row flex-nowrap' titleLayout='text-2xl text-white mt-8 mb-2 ml-4 font-bold italic' iconLayout='mt-9'/>
        </StyledScrollView>
    );
}