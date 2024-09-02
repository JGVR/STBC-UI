import { Stack } from "expo-router";
import GeneralScreenHeader from "@/components/headers/GeneralScreenHeader";
import BackButton from "@/components/buttons/BackButton";

const headerDetails = {
    title: "Loading",
    imageDetail: require("@/assets/favicon.png")
  };
  const iconLayout = {
    top: "top-2",
    right: "right-2",
    bottom: "",
    left: "",
    color: "#075985"
  };
  const buttonLayout = {
    top: "top-0",
    right: "right-5",
    bottom: "",
    left: "",
    color: "#075985"
  };

export default function GeneralScreensLayout(){
    return (
        <Stack>
            <Stack.Screen name="loadingScreen" options={{
            headerTitle: () => <GeneralScreenHeader title={headerDetails.title}/>,
            headerLeft: () => <BackButton title="" iconLayout={iconLayout} buttonLayout={buttonLayout}/>
        }}/>
        </Stack>
    );
}