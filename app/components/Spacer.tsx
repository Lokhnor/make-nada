import { StyleSheet, View } from 'react-native';

const defaultHeight = 10;

export function Spacer({ inputHeight }: { inputHeight?: number }) {
  const containerStyle = {
    ...styles.container,
    height: inputHeight || defaultHeight,
  };

  return <View style={containerStyle}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
