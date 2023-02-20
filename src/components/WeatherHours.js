import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import LottieView from 'lottie-react-native';

const WeatherHours = ({ data }) => {
  const hourlyData = data.forecast.forecastday[0].hour;

  const HourlyWeather = ({ hourlyData }) => (
    <View style={styles.innerContainer}>
      <View style={styles.hourly}>
        <Text>{dayjs.unix(hourlyData.time_epoch).format('HH:mm')}</Text>
        <Text>{Math.round(hourlyData.temp_c)}°C</Text>
        <LottieView
          autoPlay
          source={require('../../assets/lottie/50649-sunny.json')}
          style={styles.lottie}
        />
        <Text>{hourlyData.condition.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={hourlyData}
        keyExtractor={(item) => item.time_epoch}
        renderItem={({ item }) => <HourlyWeather hourlyData={item} />}
      />
    </View>
  );
};

export default WeatherHours;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    margin: 10,
  },
  innerContainer: {
    margin: 10,
  },
  hourly: {
    alignItems: 'center',
  },
  lottie: {
    height: 50,
    width: 50,
  },
});
