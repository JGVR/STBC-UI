import {Pressable, View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import {Link} from 'expo-router';

const StyledText = styled(Text);
const StyledImage= styled(Image);
const StyledView = styled(View)

export default function ImageButton(props: {title: string, imageDetail: any, screenUrl: string}){
    return (
        <Link href={props.screenUrl} className='max-w-[46%] h-56 m-2' asChild>
            <Pressable>
                <StyledView className='flex-row justify-center flex-wrap'>
                    <StyledImage className="w-full h-56 border-1 flex-none rounded opacity-70" source={props.imageDetail}/>
                    <StyledText className="absolute top-24 text-lg italic text-center w-26 text-white font-bold">
                        {props.title}
                    </StyledText>
                </StyledView>
            </Pressable>
        </Link> 
    );
}