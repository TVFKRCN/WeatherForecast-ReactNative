import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

const WeatherCurrentDetails = ({ dataListOne, dataListTwo, dataListThree }) => {
  let firstDay = dayjs.unix(dataListTwo.dt).format('DD/MM/YYYY');
  let secondDay = dayjs.unix(dataListTwo.dt).format('DD/MM/YYYY');
  let thirdDay = dayjs.unix(dataListThree.dt).format('DD/MM/YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <View style={styles.days}>
            <Text>
              {firstDay}-{dataListOne.dt}
            </Text>
            <Text>Icon</Text>
            <Text>10°C / 10°C</Text>
          </View>
          <View style={styles.days}>
            <Text>
              {secondDay}-{dataListTwo.dt}
            </Text>
            <Text>Icon</Text>
            <Text>10°C / 10°C</Text>
          </View>
          <View style={styles.days}>
            <Text>
              {thirdDay}-{dataListThree.dt}
            </Text>
            <Text>Icon</Text>
            <Text>10°C / 10°C</Text>
          </View>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
