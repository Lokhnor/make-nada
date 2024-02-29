import { Stack } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';
import { useCallback, useState } from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

type Circle = {
  id: string;
  position: {
    top: number;
    left: number;
  };
};

export default function GameScreen() {
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const translateY = useSharedValue(0);

  const startTimer = useCallback(() => {
    setIsTimerRunning(true);
    translateY.value = withSpring(translateY.value + height / 2);
  }, []);

  const stopTimer = useCallback(() => {
    setIsTimerRunning(false);
    setLastScore(timer);
    translateY.value = withSpring(translateY.value - height / 2);
    setTimer(0);
  }, [timer]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Game', headerShown: false }} />
      <View style={styles.main}>
        <Text style={styles.score}>Previous score: {lastScore}</Text>
        {!isTimerRunning ? (
          <Button title={'Start'} onPress={startTimer} />
        ) : (
          <>
            <Button title={'Stop'} onPress={stopTimer} />
            {/* <Text style={styles.timer}>{timer}</Text> */}
          </>
        )}
        <Animated.View style={[styles.mob, { transform: [{ translateY }] }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 24,
    color: 'grey',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  mob: {
    zIndex: -1,
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 26,
    backgroundColor: 'red',
  },
});
