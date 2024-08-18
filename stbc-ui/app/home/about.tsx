import { ScrollView, View, Text } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);

export default function AboutScreen(){
    return(
        <StyledScrollView className="w-full h-full bg-gray-800">
            <StyledView className="m-4">
                <StyledText className="text-4xl text-center text-teal-400 italic font-bold">Our Mission</StyledText>
                <StyledText className="mt-1 text-center text-teal-400">We are fishers of men. We teach The Bible. preach the word, and share the gospel</StyledText>
            </StyledView>
            <StyledView className="m-2">
                <StyledText className="text-white text-lg text-center">
                As a loving family, our wish is to see people grow in Christ. Our ultimate goal is to Honor God, Love people, and win the lost to King Jesus. As our name suggests, we want to be a strong fixture in our community as a Family of Faith.
                </StyledText>
                <StyledText className="text-white text-lg text-center mt-3">
                Proverbs 18:10–“The name of the Lord is a strong tower: the righteous runneth into it, and is safe.”
                </StyledText>
                <StyledText className="text-white text-lg text-center mt-3">
                This is exactly what you will find here at Strong Tower, a safe environment where the Word of God is taught, preached, and respected as the Final Authority.
                </StyledText>
                <StyledText className="text-white text-lg text-center mt-3">
                Life is good, but life gets hard as well. Our Church is a place where you can come in to get away from all the trials and trouble that each of us face on a daily basis, it’s a place where we are restored by the grace of Almighty God.
                </StyledText>
            </StyledView>
            <StyledView className="m-4">
                <StyledView>
                    <StyledText className="text-4xl text-center text-teal-400 italic font-bold">Statement of Faith</StyledText>
                </StyledView>
                <StyledView>
                    <StyledText className="text-left text-teal-400 text-lg mt-2">1. What We Believe About God:</StyledText>
                    <StyledText className="text-white text-lg text-center mt-2">
                    Life is good, but life gets hard as well. Our Church is a place where you can come in to get away from all the trials and trouble that each of us face on a daily basis, it’s a place where we are restored by the grace of Almighty God.
                    </StyledText>
                </StyledView>
                <StyledView>
                    <StyledText className="text-left text-teal-400 text-lg mt-2">2. About Jesus Christ:</StyledText>
                    <StyledText className="text-white text-lg text-center mt-2">
                    Life is good, but life gets hard as well. Our Church is a place where you can come in to get away from all the trials and trouble that each of us face on a daily basis, it’s a place where we are restored by the grace of Almighty God.
                    </StyledText>
                </StyledView>
                <StyledView>
                    <StyledText className="text-left text-teal-400 text-lg mt-2">3. About The Holy Spirit:</StyledText>
                    <StyledText className="text-white text-lg text-center mt-2">
                    The Holy Spirit is co-equal with the Father and the Son of God. He’s present in the world to make men aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with the power for living, understanding of spiritual truth, and guidance in doing what is right. He gives every believer a spiritual gift when they are saved. As Christians, we seek to live under His control daily.
                    </StyledText>
                </StyledView>
            </StyledView>
        </StyledScrollView>
    );
}