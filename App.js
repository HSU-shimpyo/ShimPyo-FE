import { View, Text, StyleSheet } from 'react-native';
import Main from './pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HospitalTimeSetting from './pages/HospitalTimeSetting';
import MedicineTimeSetting from './pages/MedicineTimeSetting';
import ChangeMedicine from './pages/ChangeMedicine';
import MedicineComplete from './pages/MedicineComplete';
import TodaysShim from './pages/TodaysShim';
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
        <Stack.Screen 
          name="ChangeMedicine" 
          component={ChangeMedicine}
          options={{ headerShown: false }} //탭바 안보이게
        />
          <Stack.Screen 
          name="MedicineComplete" 
          component={MedicineComplete}
          options={{ headerShown: false }} //탭바 안보이게
        />
          <Stack.Screen 
          name="TodaysShim" 
          component={TodaysShim}
          options={{ headerShown: false }} //탭바 안보이게
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
