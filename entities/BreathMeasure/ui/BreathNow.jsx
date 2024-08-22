import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import icon from '../../../assets/images/icon_ver2.png';
import { Animated, Easing } from 'react-native';  // Easing 추가

export default function BreathNow() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // 1초 동안 360도 회전
        easing: Easing.linear, // 올바르게 Easing.linear 사용
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]); 

  // 회전 애니메이션 설정
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <MainLayout>
      <Animated.View style={[animatedStyle]}>
        <Icon source={icon} />
      </Animated.View>

      <Count>1/3</Count>

      <StyledText fontSize="24px">후! 불어주세요</StyledText>
      <StyledText
        fontSize="14px"
        width="115px"
        height="40px"
        color="#767676"
        marginBottom="10%">
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
  justify-content: space-around;
  margin-top: 15%;
  margin-bottom: 415px;
`;

const animatedStyle = {
  width: 200,
  height: 200,
  borderWidth: 8,
  borderColor: "#E5E5EC",
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
};

const Icon = styled.Image`
  width: 140px;
  height: 140px;
`;

const Count = styled.Text`
  font-size: 20px;
  color: #111;
  margin-bottom: 20px;
`;

const StyledText = styled.Text`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: 400;
  text-align: center;
  color: ${({ color }) => color || '#111'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;
