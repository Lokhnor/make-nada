import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';
import { useEffect, useState } from 'react';
import { getRandomPosition } from '~/utils/randomPosition';

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
  const [circles, setCircles] = useState<Circle[]>([]);

  function startTimer() {
    setIsTimerRunning(true);
  }

  function stopTimer() {
    setIsTimerRunning(false);
    setLastScore(timer);
    setTimer(0);
    setCircles([]);
  }

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 5) {
            setCircles((prevCircles) => [
              ...prevCircles,
              { id: Math.random().toString(36).substr(2, 9), position: getRandomPosition() },
            ]);
          }
          if (prevTimer % 5 === 0 && prevTimer !== 0) {
            setCircles((prevCircles) => [
              ...prevCircles,
              { id: Math.random().toString(36).substr(2, 9), position: getRandomPosition() },
            ]);
          }
          return prevTimer + 1;
        });
      }, 1000);
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Game', headerShown: false }} />
      <View style={styles.main}>
        <Text style={styles.score}>Previous score: {lastScore}</Text>
        {!isTimerRunning && (
          <>
            <Button title={'Start'} onPress={startTimer}></Button>
          </>
        )}
        {isTimerRunning && (
          <>
            <Button title={'Stop'} onPress={stopTimer}></Button>
            <Text style={styles.timer}>{timer}</Text>
          </>
        )}
        {circles.map((circle: Circle) => (
          <View
            key={circle.id}
            style={[styles.mob, { top: circle.position.top, left: circle.position.left }]}
          />
        ))}
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
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 26,
    backgroundColor: 'red',
  },
});
