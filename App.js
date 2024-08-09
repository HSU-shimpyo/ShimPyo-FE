import { View, Text, StyleSheet } from 'react-native';
import Main from './pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HospitalTimeSetting from './pages/HospitalTimeSetting';
import MedicineTimeSetting from './pages/MedicineTimeSetting';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main"
        >
        <Stack.Screen 
          name="Main" 
          component={Main}
          options={{ headerShown: false }} //탭바 안보이게
        />
        <Stack.Screen 
          name="MedicineTimeSetting" 
          component={MedicineTimeSetting}
          options={{ headerShown: false }} //탭바 안보이게
        />
        <Stack.Screen 
          name="HospitalTimeSetting" 
          component={HospitalTimeSetting}
          options={{ headerShown: false }} //탭바 안보이게
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
