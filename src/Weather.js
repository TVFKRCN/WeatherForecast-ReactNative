import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import WeatherCurrent from './WeatherCurrent';
import WeatherCurrentDetails from './WeatherCurrentDetails';
import WeatherDays from './WeatherDays';

const API_KEY = '0a376894bdbeb8189cc3404d0bcdf255';

const Weather = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setData(data);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WeatherCurrent data={data} />
      <WeatherCurrentDetails data={data} />
      <WeatherDays data={data} />
    </SafeAreaView>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
