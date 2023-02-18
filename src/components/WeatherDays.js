import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import LottieView from 'lottie-react-native';

const WeatherCurrentDetails = ({ dataListOne, dataListTwo }) => {
  let firstDay = dayjs.unix(dataListOne.date_epoch).format('dddd');
  let secondDay = dayjs.unix(dataListTwo.date_epoch).format('dddd');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
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
      <View style={styles.innerContainer}>
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
  );
};

export default WeatherCurrentDetails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 15,
    height: 180,
    width: 140,
  },
  daysAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },
  lottie: {
    height: 100,
    width: 100,
  },
});
