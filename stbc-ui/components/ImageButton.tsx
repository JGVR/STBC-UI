import {Pressable, View, Text, Image} from 'react-native';
import {styled} from 'nativewind';
import {Link} from 'expo-router';

const StyledText = styled(Text);
const StyledImage= styled(Image);
const StyledView = styled(View)

export default function ImageButton(props: {title: string, imageDetail: any, screenUrl: string, imageLayout: {width: string, height: string, border: string, top: string, bottom: string, left: string, right: string}, textLayout: {width: string, height: string, position: string, top: string, bottom: string, right: string, left: string, textSize: string, textColor:string}}){
    return (
        <Link href={props.screenUrl} className='max-w-[46%] h-56 m-2' asChild>
            <Pressable>
                <StyledView className='flex-row justify-center flex-wrap'>
                    <StyledImage 
                        className={`${props.imageLayout.width} 
                                    ${props.imageLayout.height} 
                                    ${props.imageLayout.border} 
                                    ${props.imageLayout.top} 
                                    ${props.imageLayout.bottom} 
                                    ${props.imageLayout.left} 
                                    ${props.imageLayout.right} 
                                    flex-none rounded opacity-70`
                                } 
                        source={props.imageDetail}
                    />
                    <StyledText 
                        className={`
                                    ${props.textLayout.position}
                                    ${props.textLayout.top}   
                                    ${props.textLayout.bottom} 
                                    ${props.textLayout.left} 
                                    ${props.textLayout.right} 
                                    ${props.textLayout.width} 
                                    ${props.textLayout.height} 
                                    ${props.textLayout.textSize} 
                                    ${props.textLayout.textColor} 
                                    italic text-center font-bold`
                                }>
                        {props.title}
                    </StyledText>
                </StyledView>
            </Pressable>
        </Link> 
    );
}