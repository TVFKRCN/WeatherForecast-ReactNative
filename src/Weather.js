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
import WeatherCurrent from './components/WeatherCurrent';
import WeatherCurrentDetails from './components/WeatherCurrentDetails';
import WeatherDays from './components/WeatherDays';

const API_KEY = '0a376894bdbeb8189cc3404d0bcdf255';

const Weather = () => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    // if permission is denied, show an alert
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
    }

    // get the current location
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    // fetches the weather data from the openweather api
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?&lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json(); // convert the response to json

    // console.log(data);
    if (!response.ok) {
      Alert.alert('Error', 'Something went wrong'); // if the response is not ok, show an alert
    } else {
      setData(data); //set the data to the state
    }
    setRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    // if the forecast is not loaded, show a loading indicator
    return (
      <SafeAreaView>
        <ActivityIndicator size='large' />
      </SafeAreaView>
    );
  }

  const dataList = data.list[0];
  const dataListOne = data.list[1];
  const dataListTwo = data.list[2];
  const dataListThree = data.list[3];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => getData()} />
        }
      >
        <WeatherCurrent dataList={dataList} data={data} />
        <WeatherCurrentDetails dataList={dataList} data={data} />
        <WeatherDays
          dataListOne={dataListOne}
          dataListTwo={dataListTwo}
          dataListThree={dataListThree}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
