import { StyleSheet, View } from 'react-native';
import { Login } from './components/Login';
import GameScreen from './gameScreen';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <Login /> */}
        <GameScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
