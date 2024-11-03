/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainStack from './src/navigation/MainStack';
import { persistor, store } from './src/redux/store';

function App(): React.JSX.Element {

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <View style={{ flex: 1, backgroundColor: 'white' }} >
            <StatusBar backgroundColor={'#2F74D1'} />
            <MainStack />
          </View>
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}


export default App;
