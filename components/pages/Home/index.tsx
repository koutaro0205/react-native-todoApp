import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputForm from '../../parts/InputForm';
import TaskList from '../../parts/TaskList';

const Home: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Todo App !</Text>
      <Text style={styles.text}>Let's add your daily tasks!!</Text>

      <InputForm />
      <TaskList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  appTitle: {
    fontSize: 40,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    backgroundColor: 'yellow',
  }
});

export default Home;