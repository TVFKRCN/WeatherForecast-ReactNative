import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <TextInput placeholder='Search City' />
        <EvilIcons name='search' size={28} color='black' />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

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
