import {
  Alert,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCurrentDetails from '../components/WeatherCurrentDetails';
import WeatherDays from '../components/WeatherDays';
import WeatherHours from '../components/WeatherHours';

const API_KEY = '6a03dc197c974bac939112527221204';

const LocationScreen = ({ route }) => {
  const { selectedCity } = route.params;
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    setRefreshing(true);

    // fetches the weather data from the openweather api
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}&days=3&aqi=no&alerts=no`
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
  }, [route]);

  if (!data) {
    // if the forecast is not loaded, show a loading indicator
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size='large' />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getData()}
            />
          }
        />
      </SafeAreaView>
    );
  }

  return (
    <>
      <LottieView
        autoPlay
        source={require('../../assets/lottie/121815-calm-backdrop.json')}
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
          <WeatherCurrent data={data} />
          <WeatherCurrentDetails data={data} />
          <WeatherHours data={data} />
          <WeatherDays data={data} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LocationScreen;

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
