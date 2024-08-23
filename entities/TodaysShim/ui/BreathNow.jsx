import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import icon from '../../../assets/images/icon_ver2.png';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Audio } from 'expo-av';

export default function BreathNow({ setIsComplete, setAudioFileArray }) {
  const [fill, setFill] = useState(0);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("후! 불어주세요");
  const recordingRef = useRef(null);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const clickButton = () => {
    setFill(fill + 35);
    setCount((prevCount) => prevCount + 1);

    startRecording(); //녹음 시작
    setTimeout(() => {
      stopRecording(); //1초 후 녹음 중지
    }, 1000);
  };

  async function startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('권한 요청중..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('녹음 시작');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      recordingRef.current = recording;
      console.log('녹음 완료');
    } catch (err) {
      console.error('녹음 실패', err);
    }
  }

  async function stopRecording() {
    console.log('녹음 완료');
    if (recordingRef.current) {
      await recordingRef.current.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recordingRef.current.getURI();

      //배열에 새로운 URI 추가
      setAudioFileArray((prevArray) => {
        const newArray = [...prevArray, uri];
        console.log('녹음 파일 : ', uri);
        return newArray;
      });
    }
  }

  useEffect(() => {
    switch (count) {
      case 1:
        setText("후! 불어주세요");
        break;
      case 2:
        setText("한 번 더 힘차게!");
        break;
      case 3:
        setText("마지막으로 한 번 더!");
        setTimeout(() => {
          setIsComplete(true);
        }, 1500);
        break;
      default:
        break;
    }
  }, [count]);

  return (
    <MainLayout>
      {/* 측정 Circle Progress Bar */}
      <AnimatedCircularProgress
        size={200}
        width={10}
        fill={fill}
        tintColor="#BEEAF1"
        backgroundColor="#E5E5EC"
        rotation={0}
        duration={1000}
        tintColorSecondary="#3776CB"
        lineCap="round"
      />

      {/* 아이콘 */}
      <WrapIcon onPress={clickButton} activeOpacity={1}>
        <Icon source={icon} />
      </WrapIcon>

      {/* 측정 카운트 */}
      <Count marginTop="32px" marginBottom="40px">
        <Count fontSize="40px" color="#3776CB" fontWeight="600">
          {count > 3 ? 3 : count}
        </Count> / 3
      </Count>

      {/* 텍스트 */}
      <StyledText fontSize="24px" marginBottom="12px">
        {text}
      </StyledText>

      <StyledText fontSize="14px" width="110px" height="40px" color="#767676" letterSpacing="-0.25px">
        마이크와의 거리를 적당히 유지해주세요
      </StyledText>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 17%;
  margin-bottom: 415px;
`;

const WrapIcon = styled.TouchableOpacity`
  width: 140px;
  height: 140px;
  position: absolute;
  top: 7.5%;
  left: 32%;
`;
const Icon = styled.Image`
  width: 140px;
  height: 140px;
`;

const Count = styled.Text`
  color: ${({ color }) => color || '#767676'};
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || '18px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  letter-spacing: -1.1px;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const StyledText = styled.Text`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: 400;
  text-align: center;
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.6px'};
  color: ${({ color }) => color || '#111'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;
