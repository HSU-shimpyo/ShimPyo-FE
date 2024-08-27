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
import SumAiChat from './pages/SumAiChat';
import NavigationBar from './shared/component/NavigationBar';
import ChattingRoom from './pages/ChattingRoom';

const Stack = createStackNavigator();

// Main 화면에 NavigationBar를 추가한 컴포넌트
function MainScreenWithNavBar() {
  return (
    <>
      <Main />
      <NavigationBar />
    </>
  );
}

// SumAiChat 화면에 NavigationBar를 추가한 컴포넌트
function SumAiChatScreenWithNavBar() {
  return (
    <>
      <SumAiChat />
      <NavigationBar />
    </>
  );
}

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShown: false }} // 모든 스크린에서 헤더를 숨김
        >
        <Stack.Screen name="FirstSplash" component={FirstSplash}/>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignUpBreath" component={SignUpBreath}/>
        <Stack.Screen name="SignUpComplete" component={SignUpComplete}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Main" component={MainScreenWithNavBar} />
        <Stack.Screen name="MedicineTimeSetting" component={MedicineTimeSetting} />
        <Stack.Screen name="HospitalTimeSetting" component={HospitalTimeSetting} />
        <Stack.Screen name="ChangeMedicine" component={ChangeMedicine} />
        <Stack.Screen name="MedicineComplete" component={MedicineComplete} />
        <Stack.Screen name="TodaysShim" component={TodaysShim} />
        <Stack.Screen name="SumAiChat" component={SumAiChatScreenWithNavBar} />
        <Stack.Screen name="ChattingRoom" component={ChattingRoom} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
