import React, { useEffect, useRef } from 'react';
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
  Animated,
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

  const scaleValue = useRef(new Animated.Value(1)).current;

  const buttonScale = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };

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
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleLogin();
            buttonScale();
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
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
  image: {
    width: 30,
    height: 30,
    position: 'absolute',
    alignSelf: 'center',
  },
});
