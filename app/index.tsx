import { StyleSheet, View } from 'react-native';
import { Login } from './components/login';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Login />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    color: 'white',
  },
  main: {
    flex: 1,
    maxWidth: 960,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'black',
  },
});
