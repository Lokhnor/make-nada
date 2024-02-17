import { useState } from 'react';
import { Stack, Link } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Spacer } from './Spacer';

export function Login() {
  const [email, onChangeEmail] = useState<string>('example@email.com');
  const [password, onChangePassword] = useState<string>('********');
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      <Spacer />
      <Text style={styles.title}>Email</Text>
      <Spacer />
      <TextInput style={styles.textInput} onChangeText={onChangeEmail} value={email} />
      <Spacer />
      <Text style={styles.title}>Password</Text>
      <Spacer />
      <TextInput style={styles.textInput} onChangeText={onChangePassword} value={password} />
      <Spacer inputHeight={20} />
      <Link href={{ pathname: '/details', params: { name: 'Vini' } }} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
          <Spacer />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f0a66',
    borderRadius: 24,
    width: 300,
    height: 300,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36,
  },
  textInput: {
    width: 260,
    borderRadius: 24,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'grey',
    fontSize: 24,
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
    width: 200,
  },
});
