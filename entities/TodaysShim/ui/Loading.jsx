import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BlurView } from 'expo-blur';
import sandglass from '../../../assets/images/sandglass.png';
import { Animated, Easing } from 'react-native';

export default function Loading({setIsResult}) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(800), 
        Animated.timing(spinValue, {
          toValue: 0.5, 
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.delay(800), 
        Animated.timing(spinValue, {
          toValue: 1, 
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    setTimeout(()=>{
        setIsResult(true)
    },5000)
  }, [spinValue]);

  //회전
  const spin = spinValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '360deg'],
  });

  return (
    <MainLayout intensity={15}>

      {/* 모래시계 */}
      <Animated.View style={[animatedStyle, { transform: [{ rotate: spin }] }]}>
        <Icon source={sandglass} />
      </Animated.View>

      {/* 텍스트 */}
      <StyledText fontWeight="600" fontSize="20px" letterSpacing="-0.5px" marginBottom="4px"> 
        잠시만 기다려주세요
      </StyledText>

      <StyledText marginBottom="10%;">
        측정 결과를 추출하는 중입니다
      </StyledText>

    </MainLayout>
  );
}

const MainLayout = styled(BlurView)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const animatedStyle = {
  width: 64,
  height: 64,
  backgroundColor: '#3C63EC',
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 25
};

const StyledText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  line-height: 20px; /* 140% */
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.35px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
`;

const Icon = styled.Image`
  width: 36px;
  height: 36px;
`;
