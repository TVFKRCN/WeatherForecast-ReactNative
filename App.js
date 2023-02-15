import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Weather from './src/Weather';

export default function App() {
  return (
    <>
      <LottieView
        autoPlay
        source={require('./assets/lottie/121815-calm-backdrop.json')}
        style={styles.lottie}
        resizeMode='cover'
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Weather />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
