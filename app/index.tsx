import { StyleSheet, View, Dimensions } from 'react-native';
import { Login } from './components/login';

const { width, height } = Dimensions.get('window');

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
    width: width,
    height: height,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
