import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstSplash from './pages/FirstSplash';
import Start from './pages/Start';
import SignUp from './pages/SignUp';
import SignUpComplete from './pages/SignUpComplete';
import Login from './pages/Login';
import Main from './pages/Main';
import HospitalTimeSetting from './pages/HospitalTimeSetting';
import MedicineTimeSetting from './pages/MedicineTimeSetting';
import ChangeMedicine from './pages/ChangeMedicine';
import MedicineComplete from './pages/MedicineComplete';
import TodaysShim from './pages/TodaysShim';
import SumAiChat from './pages/SumAiChat';
import ChattingRoom from './pages/ChattingRoom';
import MyPage from './pages/MyPage';
import WhenBreakfast from './pages/WhenBreakfast';
import WhenLunch from './pages/WhenLunch';
import WhenDinner from './pages/WhenDinner';
import SumHistory from './pages/SumHistory';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main" // 초기 경로 설정
        screenOptions={{ headerShown: false, animationEnabled: false }} //모든 스크린에서 헤더를 숨김
        mode="card" //스크린 전환 card / modal
      >
        <Stack.Screen name="FirstSplash" component={FirstSplash} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpComplete" component={SignUpComplete} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MedicineTimeSetting" component={MedicineTimeSetting} />
        <Stack.Screen name="HospitalTimeSetting" component={HospitalTimeSetting} />
        <Stack.Screen name="ChangeMedicine" component={ChangeMedicine} />
        <Stack.Screen name="WhenBreakfast" component={WhenBreakfast} />
        <Stack.Screen name="WhenLunch" component={WhenLunch} />
        <Stack.Screen name="WhenDinner" component={WhenDinner} />
        <Stack.Screen name="MedicineComplete" component={MedicineComplete} />
        <Stack.Screen name="TodaysShim" component={TodaysShim} />
        <Stack.Screen name="SumAiChat" component={SumAiChat}/>
        <Stack.Screen name="ChattingRoom" component={ChattingRoom} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="SumHistory" component={SumHistory}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
