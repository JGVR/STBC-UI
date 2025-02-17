import { Redirect, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Linking } from 'react-native';

export default function GiveTab(){
    const [redirect, setRedirect] = useState(false);

    useFocusEffect(
        useCallback(() => {
            try{
                Linking.openURL("https://www.strongtowerbaptist.org/give/");
                setRedirect(true);
            }
            catch(error){
                console.log(`Something went wrong ${error}`)
            }

            return () => {
                setRedirect(false);
            }
        }, [])
    );

    if(redirect){
        return(
            <Redirect href="/home"/>
        );
    }
}

