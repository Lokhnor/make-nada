import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export function Login() {
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const router = useRouter();

  function handleLogin() {
    if (email === 'vini@gmail.com' && password === '12345') {
      router.navigate({ pathname: '/details' });
    } else {
      alert('Incorrect email or password');
    }
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      {/* <Text style={styles.title}>NADA</Text> */}
      <Image source={require('../../assets/NadaLogo.png')} />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEmail}
        placeholder="example@example.com"
        value={email}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangePassword}
        placeholder="********"
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height * 0.55,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: height * 0.06,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    height: height * 0.07,
    borderRadius: height * 0.04,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    fontSize: height * 0.03,
  },
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
});
