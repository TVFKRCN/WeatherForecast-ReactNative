import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const WeatherCurrent = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{data.name}</Text>
      <View style={styles.containerInside}>
        <View style={styles.currentAnimation}>
          <LottieView
            autoPlay
            source={require('../assets/lottie/50649-sunny.json')}
            style={styles.lottie}
          />
        </View>
        <View style={styles.currentInfo}>
          <View style={styles.currentTempContainer}>
            <Text style={styles.currentWeather}>
              {Math.round(data.main.temp)}°C
            </Text>

            <View style={styles.currentWeatherMinMaxContainer}>
              <Text style={styles.currentWeatherMinMax}>
                {Math.round(data.main.temp_max)}°C
              </Text>
              <Text style={styles.currentWeatherMinMax}>
                {Math.round(data.main.temp_min)}°C
              </Text>
            </View>
          </View>

          <View style={styles.currentDesc}>
            <Text>{data.weather[0].description}</Text>
            <Text>Feels Like {Math.round(data.main.feels_like)}°C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherCurrent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerInside: {
    flexDirection: 'row',
  },
  currentInfo: {
    justifyContent: 'center',
  },
  currentTempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentWeather: {
    fontSize: 46,
  },
  currentWeatherMinMaxContainer: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  currentWeatherMinMax: {
    fontSize: 14,
  },
  currentDesc: {
    alignItems: 'center',
  },
  currentAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },
  cityName: {
    color: '#C84B31',
    marginTop: 28,
    fontSize: 32,
    textAlign: 'center',
  },
  lottie: {
    height: 200,
    width: 200,
  },
});
