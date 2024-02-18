import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Spacer } from './Spacer';

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
      <Text style={styles.title}>NADA</Text>
      <Spacer inputHeight={40} />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEmail}
        placeholder="example@example.com"
        value={email}
      />
      <Spacer inputHeight={40} />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangePassword}
        placeholder="********"
        value={password}
      />
      <Spacer inputHeight={40} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 56,
    fontWeight: 'bold',
  },
  textInput: {
    width: 260,
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    width: 260,
  },
});
