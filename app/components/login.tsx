import { useState } from 'react';
import { Stack, Link } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export function Login() {
  const [email, onChangeEmail] = useState<string>('example@email.com');
  const [password, onChangePassword] = useState<string>('********');
  return (
    <>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      <View>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.subtitle} onChangeText={onChangeEmail} value={email} />
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.subtitle} onChangeText={onChangePassword} value={password} />
      </View>
      <Link href={{ pathname: '/details', params: { name: 'Vini' } }} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 36,
  },
  subtitle: {
    width: 300,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'red',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
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
