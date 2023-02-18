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
import LottieView from 'lottie-react-native';
import * as Location from 'expo-location';
import WeatherCurrent from './components/WeatherCurrent';
import WeatherCurrentDetails from './components/WeatherCurrentDetails';
import WeatherDays from './components/WeatherDays';

const API_KEY = '6a03dc197c974bac939112527221204';

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
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.coords.latitude},${location.coords.longitude}&days=3&aqi=no&alerts=no`
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

  const dataList = data.forecast.forecastday[0];
  const dataListOne = data.forecast.forecastday[1];
  const dataListTwo = data.forecast.forecastday[2];

  return (
    <>
      <LottieView
        autoPlay
        source={require('../assets/lottie/121815-calm-backdrop.json')}
        style={styles.lottieBg}
        resizeMode='cover'
      />
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getData()}
            />
          }
        >
          <WeatherCurrent dataList={dataList} data={data} />
          <WeatherCurrentDetails dataList={dataList} data={data} />
          <WeatherDays dataListOne={dataListOne} dataListTwo={dataListTwo} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieBg: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
