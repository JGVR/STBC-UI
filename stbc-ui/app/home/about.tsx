import { ScrollView} from "react-native";
import { styled } from "nativewind";
import ScreenSection from '@/utils/sections';
import ScreenBody from "@/components/ScreenBody";

const StyledScrollView = styled(ScrollView);
const bodySections = [
    new ScreenSection(
        {txt:"Our Mission", size:"text-4xl"}, //Header
        {txt:"We are fishers of men. We teach The Bible. preach the word, and share the gospel", size:"text-sm"}, //SubHeader
        {txt:"As a loving family, our wish is to see people grow in Christ. Our ultimate goal is to Honor God, Love people, and win the lost to King Jesus. As our name suggests, we want to be a strong fixture in our community as a Family of Faith. \n\nProverbs 18:10–“The name of the Lord is a strong tower: the righteous runneth into it, and is safe.” \n\nThis is exactly what you will find here at Strong Tower, a safe environment where the Word of God is taught, preached, and respected as the Final Authority. \n\nLife is good, but life gets hard as well. Our Church is a place where you can come in to get away from all the trials and trouble that each of us face on a daily basis, it’s a place where we are restored by the grace of Almighty God.", size:"text-base"} //Description
    ),
    new ScreenSection(
        {txt:"Statement of Faith", size:"text-4xl"}, //header
        null, //subHeader
        null //description
    ),
    new ScreenSection(
        {txt:"1. What We Believe About God:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"Life is good, but life gets hard as well. Our Church is a place where you can come in to get away from all the trials and trouble that each of us face on a daily basis, it’s a place where we are restored by the grace of Almighty God.", size:"text-lg"},//description
    ),
    new ScreenSection(
        {txt:"2. About Jesus Christ:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"Life is good, but life gets hard as well. Our Church is a place where you can come in to get away from all the trials and trouble that each of us face on a daily basis, it’s a place where we are restored by the grace of Almighty God.", size:"text-lg"},//description
    ),
    new ScreenSection(
        {txt:"3. About The Holy Spirit:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"The Holy Spirit is co-equal with the Father and the Son of God. He’s present in the world to make men aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with the power for living, understanding of spiritual truth, and guidance in doing what is right. He gives every believer a spiritual gift when they are saved. As Christians, we seek to live under His control daily.", size:"text-lg"},//description
    )
]

export default function AboutScreen(){
    return(
        <StyledScrollView className="w-full h-full bg-gray-800">
            <ScreenBody sections={bodySections}/>
        </StyledScrollView>
    );
}