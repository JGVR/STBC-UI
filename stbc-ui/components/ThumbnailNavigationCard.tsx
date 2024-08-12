import {Text, ScrollView, Image, View} from 'react-native';

export default function ThumbnailNavigationCard(props: {title: string, imageDetail: any}){
    const title = props.title;
    const imageUrl = props.imageDetail;

    return (
        <ScrollView>
            <View>
                <Text>{title}</Text>
                <Image source={imageUrl}></Image>
            </View>
        </ScrollView>
    );
}