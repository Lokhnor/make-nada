import { Dimensions } from 'react-native';

export function getRandomPosition() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const top = Math.random() * (screenHeight - 50);
  const left = Math.random() * (screenWidth - 50);
  return { top, left };
}
