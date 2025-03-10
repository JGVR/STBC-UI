import EvilIcons from '@expo/vector-icons/EvilIcons';
import ISearchHeader from '@/contracts/search.header.interface';
import {View, Image, StatusBar } from 'react-native';
import {styled} from 'nativewind';
import { Link } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';

const StyledView = styled(View);
const StyledImage = styled(Image);
const img = require("@/assets/STBC-Logo.png");

export default function SearchScreenHeader(){
    //Set Bar Style
    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('dark-content');
        }, [])
    );

    return(
        <StyledView className='flex flex-row justify-center h-24 items-center pt-10'>
            <StyledView className='pl-2 grow'>
                <StyledImage className='h-10 w-10' source={img}/>
            </StyledView>
            <StyledView>
                <Link href={"/media/search/"}>
                    <EvilIcons name="search" size={40} color="#0E4749"/>
                </Link>
            </StyledView>
        </StyledView>
    )
}