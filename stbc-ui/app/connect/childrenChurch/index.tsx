import {View, Text, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import { useState, useEffect } from 'react';
import School from '@/model/School';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const apiUrl = "http://192.168.1.12:8000/find?type=school&churchId=1&schoolId=1";

export default function ChildrenChurchScreen(){
    const [school, setSchool] = useState<School>();
    const [isCompleted, setIsCompleted] = useState(false);

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
        <StyledScrollView>
            <StyledText>Hello!</StyledText>
        </StyledScrollView>
    );
}