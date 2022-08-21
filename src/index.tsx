import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'ui';
import FlashMessage from 'react-native-flash-message';
import {RootNavigator} from 'navigation';

const App = () => {
  return (
    <ThemeProvider>
      <RootNavigator />
      <FlashMessage position="top" />
    </ThemeProvider>
  );
};

export default App;
