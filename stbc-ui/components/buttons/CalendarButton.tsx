import {View, Pressable, Alert, Platform} from 'react-native';
import {styled} from 'nativewind';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as Calendar from 'expo-calendar';
import { useState } from 'react';

const StyledView = styled(View);

export default function CalendarButton(props:{title: any, startDate: any, endDate: any, location: any}){
    const [hasCalendarPermission, setCalendarPermission] = useState(false);

    const requestCalendarPermission = async () => {
        try{
            const {status} = await Calendar.requestCalendarPermissionsAsync();
    
            if(status === "granted"){
                setCalendarPermission(true);
            }
            else{
                Alert.alert("Permission Denied!", "Calendar access is needed to add events.");
            }
        }catch(error){
            console.log(`Something went wrong: ${error}`);
        };
    }

    const addEventToCalendar = async () => {
        try{
            if(!hasCalendarPermission){
                await requestCalendarPermission();
            }
            let calendarId;
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      
            // On both iOS and Android, find a suitable default calendar
            const defaultCalendar = calendars.find(
              (cal) => cal.allowsModifications === true // Use any calendar that allows modifications
            );
          
            if (defaultCalendar) {
              calendarId = defaultCalendar.id;
            }else {
              throw new Error('No suitable calendar found.');
            };
    
            // Now create the event using the default calendarId
            await Calendar.createEventAsync(calendarId, {
                title: props.title,
                startDate: new Date(props.startDate),
                endDate: new Date(props.endDate),
                timeZone: 'America/New_York',
                location: props.location,
            });        
            Alert.alert('Event Added', 'Your event has been added to the calendar.');
        }catch(error){
            Alert.alert('Something Went Wrong!', 'The event could not be added to you calendar, try again later.');
        };
    }

    return(
        <Pressable onPress={addEventToCalendar}>
            <StyledView className='h-12 w-12 ml-40 mt-6 mb-6 bg-white rounded-full'>
                <StyledView className='m-3'>
                    <FontAwesome6 name="calendar-plus" size={24} color="#002626" />
                </StyledView>
            </StyledView>
        </Pressable>
    );
}