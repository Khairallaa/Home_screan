import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Updated to use your background image
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Next Adventure</Text>
        <Text style={styles.subtitle}>
          Life's too short to stay in one place. Find your next favorite city, beach, or mountain and let's get moving!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;