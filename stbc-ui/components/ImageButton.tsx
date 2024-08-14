import {Pressable, View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import {Link} from 'expo-router';

const StyledText = styled(Text);
const StyledImage= styled(Image);
const StyledView = styled(View)

export default function ImageButton(props: {title: string, imageDetail: any}){
    return (
        <Link href="/home/details" asChild>
            <Pressable>
                <StyledView className="flex-initial flex-row">
                    <StyledImage className="w-full h-56 rounded border-black border-2" source={props.imageDetail}/>
                    <StyledView className="absolute">
                        <StyledText className="inline-block text-lg italic text-center text-cyan-400">{props.title}</StyledText>
                    </StyledView>
                </StyledView>
            </Pressable>
        </Link>
    );
}