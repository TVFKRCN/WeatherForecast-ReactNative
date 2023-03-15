import { StyleSheet, View, SafeAreaView, TextInput, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

const API_KEY = '6a03dc197c974bac939112527221204';

const CitySearch = () => {
  const [cityName, setCityName] = useState('');
  const [cityData, setCityData] = useState('');

  const fetchCityData = async (cityName) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${cityName}`
    );
    const data = await response.json();
    console.log(cityData);
    if (!response.ok) {
      setCityData([]);
    } else {
      setCityData(data);
    }
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <TextInput
          placeholder='Search City'
          value={cityName}
          onChangeText={(text) => {
            setCityName(text);
            fetchCityData(cityName);
          }}
        />
        <EvilIcons name='search' size={28} color='black' />
      </View>
      <View>
        <Text>
          {!cityData[0] ? (
            <Text>nothing</Text>
          ) : (
            <Text>{cityData[0].name}</Text>
          )}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
});
