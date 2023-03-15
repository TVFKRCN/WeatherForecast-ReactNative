import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='My Location'
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name='My Location' component={HomeScreen} />
        <Drawer.Screen name='Search' component={SearchScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
