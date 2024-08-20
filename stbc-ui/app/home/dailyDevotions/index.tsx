import {ScrollView} from 'react-native';
import {styled} from 'nativewind';
import ThumbnailNavigationCard from '@/components/ThumbnailNavigationCard';
import navigationCards from '@/utils/DevotionNavigationCards';

const StyledView = styled(ScrollView);

export default function DailyDevotionsScreen(){
    return(
        <StyledView className='h-full w-full bg-gray-800'>
            <ThumbnailNavigationCard navigationCards={navigationCards}/>
        </StyledView>
    );
}