import { ScrollView} from "react-native";
import { styled } from "nativewind";
import bodySections from "@/utils/AboutScreenSections";
import ScreenBody from "@/components/ScreenBody";

const StyledScrollView = styled(ScrollView);

export default function AboutScreen(){
    return(
        <StyledScrollView className="w-full h-full bg-gray-800">
            <ScreenBody sections={bodySections}/>
        </StyledScrollView>
    );
}