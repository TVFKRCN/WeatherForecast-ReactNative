import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const WeatherCurrentDetails = ({ data }) => {
  let unixSunrise = data.sys.sunrise;
  let unixSunset = data.sys.sunset;
  let dateSunrise = new Date(unixSunrise * 1000);
  let dateSunset = new Date(unixSunset * 1000);

  let sunrisefinal = dateSunrise.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  let sunsetfinal = dateSunset.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <MaterialCommunityIcons
            name='water-percent'
            size={24}
            color='black'
          />
          <Text>{data.main.humidity}%</Text>
        </View>
        <View>
          <Feather name='wind' size={24} color='black' />
          <Text>{Math.round(data.wind.speed)}m/s</Text>
        </View>
        <View>
          <View style={styles.sunIcons}>
            <AntDesign name='arrowup' size={12} color='black' />
            <MaterialCommunityIcons
              name='weather-sunset'
              size={24}
              color='black'
            />
            <AntDesign name='arrowdown' size={12} color='black' />
          </View>
          <Text>{sunrisefinal}</Text>
          <Text>{sunsetfinal}</Text>
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
  },
  sunIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
