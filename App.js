import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstSplash from './pages/FirstSplash';
import Start from './pages/Start';
import SignUp from './pages/SignUp';
import SignUpBreath from './pages/SignUpBreath';
import SignUpComplete from './pages/SignUpComplete';
import Login from './pages/Login';
import Main from './pages/Main';
import HospitalTimeSetting from './pages/HospitalTimeSetting';
import MedicineTimeSetting from './pages/MedicineTimeSetting';
import ChangeMedicine from './pages/ChangeMedicine';
import MedicineComplete from './pages/MedicineComplete';
import TodaysShim from './pages/TodaysShim';
import NavigationBar from './shared/component/NavigationBar';

const Stack = createStackNavigator();

function MainScreenWithNavBar() {
  return (
    <>
      <Main />
      <NavigationBar />
    </>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="FirstSplash"
        >
      <Stack.Screen 
          name="FirstSplash" 
          component={FirstSplash}
          options={{ headerShown: false }} //탭바 안보이게
        />
      <Stack.Screen 
          name="Start" 
          component={Start}
          options={{ headerShown: false }} //탭바 안보이게
        />
      
         <Stack.Screen 
          name="SignUp" 
          component={SignUp}
          options={{ headerShown: false }} //탭바 안보이게
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }} //탭바 안보이게
        />
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
          name="BreathMeasure" 
          component={BreathMeasure}
          options={{ headerShown: false }} //탭바 안보이게
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
