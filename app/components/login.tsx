import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, TextInput, View, Image, Animated } from 'react-native';
import { Button } from './Button';

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

  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveRight = Animated.timing(position, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: true,
    });

    const reset = Animated.timing(position, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    const moveLeft = Animated.timing(position, {
      toValue: -40,
      duration: 1000,
      useNativeDriver: true,
    });

    Animated.loop(
      Animated.sequence([
        moveRight,
        Animated.delay(1000),
        reset,
        Animated.delay(1000),
        moveLeft,
        Animated.delay(1000),
        reset,
        Animated.delay(1000),
      ]),
      {
        iterations: -1,
      }
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Login', headerShown: false }} />
      <View style={{ justifyContent: 'center' }}>
        <Image source={require('../../assets/NadaGlobe.png')} />
        <Animated.Image
          source={require('../../assets/NadaIris.png')}
          style={[styles.image, { transform: [{ translateX: position }] }]}
        />
      </View>
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
      <Button onPress={handleLogin} title={'Login'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '100%',
    height: 54,
    borderRadius: 30,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 22,
  },
  image: {
    width: 30,
    height: 30,
    position: 'absolute',
    alignSelf: 'center',
  },
});
