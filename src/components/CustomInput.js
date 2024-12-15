// src/components/CustomInput.js
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.shadow}>
      <TextInput
        style={[styles.input, styles.light]}
        placeholder={placeholder}
        placeholderTextColor="#A1A1A1"
        value={value}
        onChangeText={onChangeText}
        onFocus={() => console.log('Focused')}
        onBlur={() => console.log('Blurred')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  light: {
    backgroundColor: '#E7E7E7', // coolGray.100
  },
  dark: {
    backgroundColor: '#262626', // coolGray.800
  },
});

export default CustomInput;
