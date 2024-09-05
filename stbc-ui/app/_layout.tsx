import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Layout(){
  return(
    <Tabs initialRouteName="home">
      <Tabs.Screen name="index" options={{href:null, headerShown: false}}/>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarLabelStyle: { fontSize: 14 }, // Adjusts label font size if needed
        tabBarActiveTintColor: '#2DD4BF',  // Color of the tab when active
        tabBarInactiveTintColor: 'black', // Color of the tab when inactive
        tabBarIcon: ({color}) => <FontAwesome5 name="church" size={28} color="#002626" />, 
        headerShown:false
      }}/>
    </Tabs>
  );
}