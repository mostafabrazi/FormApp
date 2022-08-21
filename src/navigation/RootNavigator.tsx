import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from './NavigationContainer';
import {FormScreen} from 'screens';
import {useTheme} from 'ui';
import {SafeAreaView} from 'ui/SafeAreaView';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <SafeAreaView edges={['top']} style={{backgroundColor: colors.black}} />
      <Stack.Navigator
        initialRouteName="Form"
        screenOptions={{
          cardOverlayEnabled: false,
          headerShown: false,
          gestureEnabled: false,
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
