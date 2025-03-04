import ItemsList from "@/components/ItemsList";
import { View } from "react-native";
import { styled } from "nativewind";

const itemImgLayout = "h-10 w-24 rounded-lg mb-4";
const itemTitleLayout = "h-5 text-white mb-1";
const itemOptMsgLayout = "h-5 text-white";
const iconLayout = "mt-2";
const itemListContainerLayout = "h-[95%] w-full";
const StyledView = styled(View);

const data = [
    {
        title: "Ministries",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: "",
        targetScreen: "connect/ministries"
    },
    {
        title: "Sunday School",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: "",
        targetScreen: "connect/schools"
    },
    {
        title: "Children's Church",
        description: "",
        url: "",
        imageUrl: "https://stbc.blob.core.windows.net/stbc-events/strong-tower.png",
        location: "",
        startDate: "",
        endDate: "",
        targetScreen: "connect/childrenChurch"
    }
]

export default function SearchScreen(){
    return(
        <StyledView>
            <ItemsList data={data} imageLayout={itemImgLayout} titleLayout={itemTitleLayout} iconLayout={iconLayout} description={itemOptMsgLayout} isDynamicScreen={false} isDynamicList={false} onScroll="" containerLayout={itemListContainerLayout} isLoading={false}/>
        </StyledView>
    );
}