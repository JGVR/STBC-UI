import {View, Text} from 'react-native';
import {styled} from 'nativewind';
import YoutubePlayer from "react-native-youtube-iframe";

const StyledView = styled(View);

export default function YoutubeVideoPlayer(){
    return (
        <StyledView className="m-4">
            <YoutubePlayer height={300} videoId='CvHBOeoX3pI' play={false}/>
        </StyledView>
    );
}