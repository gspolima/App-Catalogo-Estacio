import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import LoginPage from './components/Login';
import { navigationRef } from './routing/RootNavigation';
import Header from './components/Header';

const Stack = createStackNavigator();



export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    'Inter': require('./assets/fonts/Inter-VariableFont_slnt_wght.ttf')
  });

  if (fontsLoaded === false) {
    return <AppLoading/>;
  }
  else {
    return (
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent backgroundColor='transparent'></StatusBar>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{headerMode: 'screen'}}
        >
          <Stack.Screen
            name='Login'
            component={LoginPage}
            options={{
              header: () => <Header headerDisplayName='Login'/>
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
