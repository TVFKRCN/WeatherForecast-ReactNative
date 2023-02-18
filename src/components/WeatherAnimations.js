import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const WeatherAnimations = ({ data }) => {
  return (
    <View style={styles.currentAnimation}>
      {data.current.is_day === 1 ? (
        // Day Animations
        data.current.condition.code === 1000 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-sunny.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1003 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-partly-cloudy.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1006 ||
          data.current.condition.code === 1009 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-windy.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1030 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-mist.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1063 ||
          data.current.condition.code === 1069 ||
          data.current.condition.code === 1072 ||
          data.current.condition.code === 1150 ||
          data.current.condition.code === 1153 ||
          data.current.condition.code === 1168 ||
          data.current.condition.code === 1171 ||
          data.current.condition.code === 1180 ||
          data.current.condition.code === 1183 ||
          data.current.condition.code === 1186 ||
          data.current.condition.code === 1189 ||
          data.current.condition.code === 1192 ||
          data.current.condition.code === 1240 ||
          data.current.condition.code === 1243 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-partly-shower.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1066 ||
          data.current.condition.code === 1210 ||
          data.current.condition.code === 1216 ||
          data.current.condition.code === 1222 ||
          data.current.condition.code === 1249 ||
          data.current.condition.code === 1252 ||
          data.current.condition.code === 1255 ||
          data.current.condition.code === 1258 ||
          data.current.condition.code === 1261 ||
          data.current.condition.code === 1264 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-snow-sunny.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1087 ||
          data.current.condition.code === 1282 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-thunder.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1114 ||
          data.current.condition.code === 1117 ||
          data.current.condition.code === 1204 ||
          data.current.condition.code === 1207 ||
          data.current.condition.code === 1213 ||
          data.current.condition.code === 1219 ||
          data.current.condition.code === 1225 ||
          data.current.condition.code === 1237 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-snow.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1135 ||
          data.current.condition.code === 1147 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-mist.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1195 ||
          data.current.condition.code === 1198 ||
          data.current.condition.code === 1201 ||
          data.current.condition.code === 1246 ||
          data.current.condition.code === 1276 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-storm.json')}
            style={styles.lottie}
          />
        ) : data.current.condition.code === 1273 ||
          data.current.condition.code === 1279 ? (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-stormshowersday.json')}
            style={styles.lottie}
          />
        ) : (
          <LottieView
            autoPlay
            source={require('../../assets/lottie/weather-windy.json')}
            style={styles.lottie}
          />
        )
      ) : // Night Animations
      data.current.condition.code === 1000 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-night.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1003 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-cloudynight.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1006 ||
        data.current.condition.code === 1009 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-windy.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1030 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-mist.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1063 ||
        data.current.condition.code === 1069 ||
        data.current.condition.code === 1072 ||
        data.current.condition.code === 1150 ||
        data.current.condition.code === 1153 ||
        data.current.condition.code === 1168 ||
        data.current.condition.code === 1171 ||
        data.current.condition.code === 1180 ||
        data.current.condition.code === 1183 ||
        data.current.condition.code === 1186 ||
        data.current.condition.code === 1189 ||
        data.current.condition.code === 1192 ||
        data.current.condition.code === 1240 ||
        data.current.condition.code === 1243 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-rainynight.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1066 ||
        data.current.condition.code === 1210 ||
        data.current.condition.code === 1216 ||
        data.current.condition.code === 1222 ||
        data.current.condition.code === 1249 ||
        data.current.condition.code === 1252 ||
        data.current.condition.code === 1255 ||
        data.current.condition.code === 1258 ||
        data.current.condition.code === 1261 ||
        data.current.condition.code === 1264 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-snownight.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1087 ||
        data.current.condition.code === 1282 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-thunder.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1114 ||
        data.current.condition.code === 1117 ||
        data.current.condition.code === 1204 ||
        data.current.condition.code === 1207 ||
        data.current.condition.code === 1213 ||
        data.current.condition.code === 1219 ||
        data.current.condition.code === 1225 ||
        data.current.condition.code === 1237 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-snow.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1135 ||
        data.current.condition.code === 1147 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-mist.json')}
          style={styles.lottie}
        />
      ) : data.current.condition.code === 1195 ||
        data.current.condition.code === 1198 ||
        data.current.condition.code === 1201 ||
        data.current.condition.code === 1246 ||
        data.current.condition.code === 1276 ||
        data.current.condition.code === 1273 ||
        data.current.condition.code === 1279 ? (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-storm.json')}
          style={styles.lottie}
        />
      ) : (
        <LottieView
          autoPlay
          source={require('../../assets/lottie/weather-windy.json')}
          style={styles.lottie}
        />
      )}
    </View>
  );
};

export default WeatherAnimations;

const styles = StyleSheet.create({
  currentAnimation: {
    alignItems: 'center',
    alignContent: 'center',
  },

  lottie: {
    height: 200,
    width: 200,
  },
});
