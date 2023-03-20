import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  useEffect(() => {
    getCity()
  }, []);

  const Drawer = createDrawerNavigator();

  const getCity = async () => {
    try {
      const savedCity = await AsyncStorage.getItem("city");
      const currentCity = JSON.parse(savedCity);
      console.log(currentCity);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='My Location'
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name='My Location' component={HomeScreen} />
        <Drawer.Screen name='Search' component={SearchScreen} />
        <Drawer.Screen
          name='Location'
          component={LocationScreen}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
