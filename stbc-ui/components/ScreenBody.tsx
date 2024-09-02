import {View, Text} from "react-native";
import {styled} from 'nativewind';
import ScreenSection from "@/utils/sections";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function ScreenBody(props: {sections: ScreenSection[]}){
    return (
        props.sections.map((section, idx) => {
            return(
                <StyledView key={idx} className="m-4">
                    <StyledText className={`${section.header.size} text-center text-teal-400 italic font-bold`}>{section.header.txt}</StyledText>
                    {
                        section.subHeader ? <StyledText className={`mt-1 text-center text-teal-400 italic ${section.subHeader.size}`}>{section.subHeader.txt}</StyledText> : null
                    }
                    {
                        section.description ? <StyledText className={`text-white ${section.description.size} text-center m-2`}>{section.description.txt}</StyledText>: null
                    }
                </StyledView>
            );
        })
    );
}