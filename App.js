import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // useEffect(() => {
  //   getCity();
  // }, []);

  const Drawer = createDrawerNavigator();

  const [savedCities, setSavedCities] = useState(null);

  const getCity = async () => {
    try {
      // clearAll();
      const savedCity = await AsyncStorage.getItem('cities');
      const currentCity = JSON.parse(savedCity);
      // console.log(currentCity);
      setSavedCities(currentCity);
      console.log(savedCities);
    } catch (error) {
      console.log(error);
    }
  };

  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };

  return (
    <NavigationContainer onStateChange={() => getCity()}>
      <Drawer.Navigator
        initialRouteName='My Location'
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name='My Location' component={HomeScreen} />
        <Drawer.Screen
          name='Search'
          component={SearchScreen}
          // options={{
          //   drawerItemStyle: {
          //     display: 'none',
          //   },
          // }}
        />
        <Drawer.Screen
          name='Location'
          component={LocationScreen}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
        {savedCities &&
          savedCities.map((cities) => (
            <Drawer.Screen
              key={cities}
              name={cities}
              component={LocationScreen}
              initialParams={{ selectedCity: cities }}
            />
          ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
