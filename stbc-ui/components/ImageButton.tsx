import {Pressable, View, Text, Image, Linking} from 'react-native';
import {styled} from 'nativewind';
import {Link} from 'expo-router';
import ComponentLayout from '@/utils/ComponentLayout';

const StyledText = styled(Text);
const StyledImage= styled(Image);
const StyledView = styled(View);
const StyledPressable = styled(Pressable);

export default function ImageButton(props: {title: string, imageDetail: any, url: string, isOutgoingUrl: boolean, imageLayout: ComponentLayout, textLayout: ComponentLayout, data: any}){

    if(props.isOutgoingUrl){
        const handlePress = async () => {
            try{
                await Linking.openURL(props.url);
            }catch(error){
                console.error(`Something went wrong: ${error}`)
            }
        };
        return(
            <StyledPressable className="max-w-[45%] m-2" onPress={handlePress}>
                    <StyledView className='flex-row justify-center flex-wrap'>
                        <StyledImage 
                            className={`${props.imageLayout.width} 
                                        ${props.imageLayout.height} 
                                        ${props.imageLayout.border} 
                                        ${props.imageLayout.top} 
                                        ${props.imageLayout.bottom} 
                                        ${props.imageLayout.left} 
                                        ${props.imageLayout.right} 
                                        ${props.imageLayout.opacity}
                                        ${props.imageLayout.border}
                                        flex-none`
                                        } 
                            src={props.imageDetail}
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
                                        ${props.textLayout.size} 
                                        ${props.textLayout.color} 
                                        italic text-center font-bold`
                                    }>
                            {props.title}
                        </StyledText>
                    </StyledView>
            </StyledPressable>
        );
    }

    return(
        <Link href={{
            pathname: `${props.url}`,
            params: {data: JSON.stringify(props.data)}
        }} className="max-w-[45%] m-2" asChild>
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
                                    ${props.imageLayout.opacity}
                                    ${props.imageLayout.border}
                                    flex-none`
                                    } 
                        src={props.imageDetail}
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
                                    ${props.textLayout.size} 
                                    ${props.textLayout.color} 
                                    italic text-center font-bold`
                                }>
                        {props.title}
                    </StyledText>
                </StyledView>
            </Pressable>
        </Link>
    );
}