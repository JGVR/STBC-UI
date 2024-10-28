import {View} from 'react-native';
import {styled} from 'nativewind';
import YoutubePlayer from "react-native-youtube-iframe";

const StyledView = styled(View);

export default function YoutubeVideoPlayer(props: {videoId: string, height: number, width: number, containerStyle: string}){
    return (
        <StyledView className={props.containerStyle}>
            <YoutubePlayer height={props.height} width={props.width} videoId={props.videoId} play={false}/>
        </StyledView>
    );
}