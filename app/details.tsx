import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';

export default function Details() {
  function startTimer() {
    alert('Start');
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details', headerShown: false }} />
      <View style={styles.main}>
        <Text style={styles.title}>Details</Text>
        <Button title={'Start'} onPress={startTimer}></Button>
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
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'purple',
  },
});
