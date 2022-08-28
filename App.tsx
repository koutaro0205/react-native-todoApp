import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/pages/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
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
});

export default App;