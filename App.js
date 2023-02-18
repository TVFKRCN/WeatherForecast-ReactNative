import { SafeAreaView } from 'react-native';
import Weather from './src/Weather';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Weather />
    </SafeAreaView>
  );
}
