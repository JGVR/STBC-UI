import { ScrollView} from "react-native";
import { styled } from "nativewind";
import ScreenSection from "@/utils/Sections";
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
    ),
    new ScreenSection(
        {txt:"4. About The Bible:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"The Bible is God’s Word to us, written by human authors under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living. Because it is inspired by God, it is the truth without any mixture of error.", size:"text-lg"},//description
    ),
    new ScreenSection(
        {txt:"5. About Human Beings:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"People are made in the Spiritual image of God, to be like Him in character. People are the supreme object of God’s creation. Although every person has tremendous potential for good, all of us are marred by an attitude of disobedience toward God called “sin”. This attitude separates people from God and causes many problems in life.", size:"text-lg"},//description
    ),
    new ScreenSection(
        {txt:"6. About Salvation:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"Salvation is God’s free gift to us but we must accept it. We can never make up for our sin by self- improvement or good works. Only by trusting in Jesus Christ as God’s offer of forgiveness can anyone be saved from sin’s penalty. When we turn from our self-ruled life and turn to Jesus in faith we are saved. Eternal life begins the moment one receives Jesus Christ into his life by faith.", size:"text-lg"},//description
    ),
    new ScreenSection(
        {txt:"7. About Eternal Security:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"Because God gives us life through Jesus Christ, the true believer is secure in that salvation for eternity. If you have been genuinely saved, you cannot “lose” it. Salvation is maintained by the grace and power of God, not by the self-effort of the Christian. It is the grace and keeping power of God that gives us this security.", size:"text-lg"},//description
    ),
    new ScreenSection(
        {txt:"8. About Eternity:", size:"text-lg"}, //header
        null, //subHeader
        {txt:"People were created to exist forever. We will either exist eternally separated from God by sin, or eternally with God through forgiveness and salvation. To be eternally separated from God is Hell. To be eternally in union with Him is eternal life in Heaven. Heaven and Hell are real places of eternal existence.", size:"text-lg"},//description
    )
]

export default function AboutScreen(){
    return(
        <StyledScrollView className="w-full h-full bg-gray-800">
            <ScreenBody sections={bodySections}/>
        </StyledScrollView>
    );
}