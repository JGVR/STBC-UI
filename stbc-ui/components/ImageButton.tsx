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
                <StyledView className="w-52 h-56">
                    <StyledImage className="w-52 h-56 rounded border-black border-2" source={props.imageDetail}/>
                    <StyledView className="absolute translate-x-24 translate-y-24 -left-4">
                        <StyledText className="inline-block text-lg italic text-center text-cyan-400">{props.title}</StyledText>
                    </StyledView>
                </StyledView>
            </Pressable>
        </Link>
        
    );
}