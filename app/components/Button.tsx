import { useRef } from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ onPress, title }: { onPress?: any; title: any }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const buttonScale = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress();
          buttonScale();
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    height: 54,
    borderRadius: 30,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    width: 30,
    height: 30,
    position: 'absolute',
    alignSelf: 'center',
  },
});
