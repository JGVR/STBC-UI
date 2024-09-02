import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout(){
  return(
    <Tabs initialRouteName="home">
      <Tabs.Screen name="index" options={{href:null, headerShown: false}}/>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarLabelStyle: { fontSize: 12 }, // Adjusts label font size if needed
        tabBarActiveTintColor: 'blue',  // Color of the tab when active
        tabBarInactiveTintColor: 'black', // Color of the tab when inactive
        tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color="black"/>, 
        headerShown:false
      }}/>
      <Tabs.Screen name="general" options={{href:null, headerShown: false}}/>
    </Tabs>
  );
}