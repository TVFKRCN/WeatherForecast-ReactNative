import { StyleSheet, Text, View } from 'react-native';
import WeatherAnimations from './WeatherAnimations';

const WeatherCurrent = ({ dataList, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{data.location.name}</Text>
      <View style={styles.containerInside}>
        <View style={styles.currentAnimation}>
          <WeatherAnimations data={data} />
        </View>
        <View style={styles.currentInfo}>
          <View style={styles.currentTempContainer}>
            <Text style={styles.currentWeather}>
              {Math.round(data.current.temp_c)}°C
            </Text>

            <View style={styles.currentWeatherMinMaxContainer}>
              <Text style={styles.currentWeatherMinMax}>
                {Math.round(dataList.day.maxtemp_c)}°C
              </Text>
              <Text style={styles.currentWeatherMinMax}>
                {Math.round(dataList.day.mintemp_c)}°C
              </Text>
            </View>
          </View>

          <View style={styles.currentDesc}>
            <Text>{data.current.condition.text}</Text>
            <Text>Feels Like {Math.round(data.current.feelslike_c)}°C</Text>
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
    marginTop: 30,
    fontSize: 36,
    textAlign: 'center',
  },
  lottie: {
    height: 200,
    width: 200,
  },
});
