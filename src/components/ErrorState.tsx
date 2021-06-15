import React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import noInternet from 'src/assets/images/nointernet_connection.png';

const ErrorState = ({onRetry}) => (
  <View style={s.container}>
    <View style={s.content}>
      <Image source={noInternet} style={s.image} />
      <Text style={s.title}>Something went wrong...</Text>
      <Text style={s.subTitle}>An alien probably blocking your signal</Text>
    </View>
    <Pressable onPress={onRetry} style={s.button}>
      <Text style={s.buttonText}>RETRY</Text>
    </Pressable>
  </View>
);

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 24,
    fontSize: 18,
    color: '#4A4A4A',
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#929292',
    textAlign: 'center',
  },
  button: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  buttonText: {
    color: 'green',
    fontSize: 15,
  },
});

export default ErrorState;
