// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, colorScheme === 'dark' ? styles.dark : styles.light]}>
      <Text style={[styles.title, colorScheme === 'dark' ? styles.textDark : styles.textLight]}>
        Welcome to the App
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            colorScheme === 'dark' ? styles.inputDark : styles.inputLight,
          ]}
          placeholder="Enter your name"
          placeholderTextColor={colorScheme === 'dark' ? '#A1A1A1' : '#555'}
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details', { name })}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Icon name="emoji-happy" size={30} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  light: {
    backgroundColor: '#F7F7F7',
  },
  dark: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textLight: {
    color: '#333',
  },
  textDark: {
    color: '#FFF',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  inputLight: {
    backgroundColor: '#E7E7E7',
  },
  inputDark: {
    backgroundColor: '#262626',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconButton: {
    marginTop: 20,
  },
});

export default HomeScreen;