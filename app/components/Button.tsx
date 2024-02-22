import { useRef } from 'react';
import { Animated, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

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
    height: height * 0.07,
    borderRadius: height * 0.04,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: height * 0.03,
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
