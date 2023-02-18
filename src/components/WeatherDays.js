import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import LottieView from 'lottie-react-native';

const WeatherCurrentDetails = ({ dataListOne, dataListTwo }) => {
  let firstDay = dayjs.unix(dataListOne.date_epoch).format('DD/MM/YYYY');
  let secondDay = dayjs.unix(dataListTwo.date_epoch).format('DD/MM/YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.days}>
          <Text>{firstDay}</Text>
          <View style={styles.daysAnimation}>
            <LottieView
              autoPlay
              source={require('../../assets/lottie/50649-sunny.json')}
              style={styles.lottie}
            />
          </View>
          <Text>
            {Math.round(dataListOne.day.maxtemp_c)}°C /{' '}
            {Math.round(dataListOne.day.mintemp_c)}°C
          </Text>
        </View>
        <View style={styles.days}>
          <Text>{secondDay}</Text>
          <View style={styles.daysAnimation}>
            <LottieView
              autoPlay
              source={require('../../assets/lottie/50649-sunny.json')}
              style={styles.lottie}
            />
          </View>
          <Text>
            {Math.round(dataListTwo.day.maxtemp_c)}°C /{' '}
            {Math.round(dataListTwo.day.mintemp_c)}°C
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCurrentDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    margin: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3%',
    paddingHorizontal: 20,
  },
  days: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  daysAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },
  lottie: {
    height: 80,
    width: 80,
  },
});
