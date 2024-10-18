import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Layout(){
  return(
    <Tabs initialRouteName="home">
      <Tabs.Screen name="index" options={{href:null, headerShown: false}}/>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarLabelStyle: { fontSize: 12 }, // Adjusts label font size if needed
        tabBarActiveTintColor: '#2DD4BF',  // Color of the tab when active
        tabBarInactiveTintColor: 'black', // Color of the tab when inactive
        tabBarIcon: ({color}) => <FontAwesome5 name="church" size={28} color="#002626" />, 
        headerShown:false
      }}/>
      <Tabs.Screen name="events" options={{
        title: "Event",
        tabBarLabelStyle: { fontSize: 14 }, // Adjusts label font size if needed
        tabBarActiveTintColor: '#2DD4BF',  // Color of the tab when active
        tabBarInactiveTintColor: 'black', // Color of the tab when inactive
        tabBarIcon: ({color}) => <MaterialIcons name="event" size={28} color="#002626"/>, 
        headerShown:false
      }}/>
      <Tabs.Screen name="connect" options={{
        title: "Connect",
        tabBarLabelStyle: { fontSize: 14 }, // Adjusts label font size if needed
        tabBarActiveTintColor: '#2DD4BF',  // Color of the tab when active
        tabBarInactiveTintColor: 'black', // Color of the tab when inactive
        tabBarIcon: ({color}) => <MaterialIcons name="groups" size={28} color="#002626"/>, 
        headerShown:false
      }}/>
    </Tabs>
  );
}