import {View, Text} from 'react-native';
import BgImageScreenHeader from '@/components/headers/BgImageScreenHeader';
import { useRouter } from 'expo-router';
import ComponentLayout from '@/utils/ComponentLayout';

const imageLayout = new ComponentLayout({height: "h-12", width: "w-full"})

export default function EventsScreen(){
    const router = useRouter();

    return(
        <View>
            <BgImageScreenHeader router={router} backButtonShown={false} buttonTitle="" backButtonLayout="" backIconLayout="" headerTitle='Events' headerOptionalMsg="" imageLayout={imageLayout}/>
            <Text>Hello!</Text>
        </View>
    );
}