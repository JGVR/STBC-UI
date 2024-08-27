import {View, Text, ScrollView} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);

export default function DevotionScreen(){
    return(
        <StyledScrollView className="w-full h-full bg-gray-800">
            <StyledView className="w-full">
                <StyledText className="text-teal-400 m-5 text-center italic font-bold text-lg">{"Varying personalities within people make for varying reaction to contention. This is true, but should it be true among Christians. As Christians, we should always seek peace and resolve within our relationships and dealings with others. Sadly, this is not always the case. \n\nAbram was God’s man, and his actions are conducive to a man of faith when dealing with contention. Abram, and his nephew Lot, both had a full staff of farmhands that helped tend to their herd. There arose a great strife between Abram’s herdsmen and Lot’s. Abram takes the lead and gives the right attention to this contention. \n\nThe most important step in resolving contention is to recognize it as soon as possible and then work to resolve it. Abram addresses his nephew Lot and shares with him that they needed to keep any contention away from both their herdsmen and between themselves. Abram settled in his heart that there was to be NO STRIFE between their men or between each other. He took lead on a solution and worked to see it come to pass. \n\nAre you like Abram or like Lot? Will you take lead on resolving strife and contention or will you wait on someone else to do it? Will you recognize it for what it is and settle in your heart that you will have nothing to do with Strife between another brother or sister in Christ. We must give the right attention to contention and God will always honor our doing so. \n\nGenesis 13:5—9 “5 And Lot also, which went with Abram, had flocks, and herds, and tents. 6 And the land was not able to bear them, that they might dwell together: for their substance was great, so that they could not dwell together. 7 And there was a strife between the herdmen of Abram’s cattle and the herdmen of Lot’s cattle: and the Canaanite and the Perizzite dwelled then in the land. 8 And Abram said unto Lot, Let there be no strife, I pray thee, between me and thee, and between my herdmen and thy herdmen; for we be brethren. 9Is not the whole land before thee? separate thyself, I pray thee, from me: if thou wilt take the left hand, then I will go to the right; or if thou depart to the right hand, then I will go to the left.”"}</StyledText>
            </StyledView>
        </StyledScrollView>
    );
}