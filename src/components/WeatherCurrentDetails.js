import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import dayjs from 'dayjs';

const WeatherCurrentDetails = ({ dataList, data }) => {
  // let sunriseHour = dayjs(new Date(data.city.sunrise * 1000)).format('HH:MM');
  // let sunsetHour = dayjs(new Date(data.city.sunset * 1000)).format('HH:MM');
  // let sunsetHour = dayjs(dataList.astro.sunset).format('HH:MM');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Ionicons name='umbrella' size={32} color='black' />
          <Text>{dataList.day.daily_chance_of_rain}%</Text>
        </View>
        <View>
          <Feather name='wind' size={32} color='black' />
          <Text>{Math.round(data.current.wind_kph)}km/h</Text>
        </View>
        <View>
          <View style={styles.sunIcons}>
            <AntDesign name='arrowup' size={16} color='black' />
            <MaterialCommunityIcons
              name='weather-sunset'
              size={32}
              color='black'
            />
            <AntDesign name='arrowdown' size={16} color='black' />
          </View>
          <Text>
            {dataList.astro.sunrise} - {dataList.astro.sunrise}
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
    marginHorizontal: 16,
  },
  sunIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
});
