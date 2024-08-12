import {Text, ScrollView} from 'react-native';
import {Link} from 'expo-router';

export default function HomeScreen(){
    return (
        <ScrollView>
            <Text>My First Page</Text>
            <Link href="/home/details">Go To Details</Link>
        </ScrollView>
    );
}