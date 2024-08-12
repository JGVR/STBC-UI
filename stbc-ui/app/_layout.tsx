import { Tabs } from "expo-router";

export default function Layout(){
  return(
    <Tabs initialRouteName="home">
      <Tabs.Screen name="index" options={{href:null}}/>
      <Tabs.Screen name="home" options={{tabBarLabel:"home", headerShown:false}}/>
    </Tabs>
  );
}