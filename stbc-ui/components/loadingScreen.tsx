import {View, Image, Animated, Easing} from 'react-native';
import {styled} from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useRef } from 'react';

const StyledView = styled(View);

export default function LoadingScreen(){
    const spinAnim = useRef(new Animated.Value(0)).current; // Initial value for rotation: 0

    useEffect(() => {
        // Spin animation setup
        const spin = Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 1500, // Duration of one spin in milliseconds
                easing: Easing.linear, // Easing function
                useNativeDriver: true, // Use native driver for better performance
            })
        );
        spin.start(); // Start the animation

        return () => spin.stop(); // Stop the animation when the component is unmounted
    }, [spinAnim]);

    const rotate = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'], // Rotate from 0 to 360 degrees
      });

    return(
        <StyledView className="h-full w-full bg-sky-950">
            <StyledView className="absolute left-[40%] top-[40%]">
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <FontAwesome name="spinner" size={100} color="white" />
                </Animated.View>
            </StyledView>
        </StyledView>
    )
}