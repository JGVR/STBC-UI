import EvilIcons from '@expo/vector-icons/EvilIcons';
import ISearchHeader from '@/contracts/search.header.interface';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {styled} from 'nativewind';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledImage = styled(Image);
const img = require("@/assets/STBC-Logo.png");

export default function SearchScreenHeader({title}: ISearchHeader){
    return(
        <StyledSafeAreaView className='flex flex-row justify-center h-24 items-center'>
            <StyledView className='pl-2 grow'>
                <StyledImage className='h-10 w-10' source={img}/>
            </StyledView>
            <StyledView>
                <Link href={"/media/[search]"}>
                    <EvilIcons name="search" size={40} color="#0E4749"/>
                </Link>
            </StyledView>
        </StyledSafeAreaView>
    )
}