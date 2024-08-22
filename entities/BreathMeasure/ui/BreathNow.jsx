import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import icon from '../../../assets/images/icon_ver2.png';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Animated, Easing } from 'react-native';

export default function BreathNow({ setIsComplete }) {
  const [fill, setFill] = useState(0);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("후! 불어주세요");

  const clickButton = () => {
    setFill(fill + 35);
    setCount((prevCount) => prevCount + 1);
  };

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
        setTimeout(()=>{
          setIsComplete(true);
        }, 1500)
        break;
    }
  }, [count]);

  return (
    <MainLayout>
      <AnimatedCircularProgress
        size={200}
        width={10}
        fill={fill}
        tintColor="#BEEAF1"
        backgroundColor="#E5E5EC"
        rotation={0}
        duration={1000}
        tintColorSecondary="#3776CB"
        lineCap="round" //진행바 끝부분 변경 가능 butt, round, square
      />

      <WrapIcon onPress={clickButton} activeOpacity={1}>
        <Icon source={icon} />
      </WrapIcon>

      <Count marginTop="32px" marginBottom="40px">
        <Count fontSize="40px" color="#3776CB" fontWeight="600">
          {count > 3 ? 3 : count} 
        </Count> / 3
      </Count>

      <StyledText fontSize="24px" marginBottom="12px">{text}</StyledText>

      <StyledText
        fontSize="14px"
        width="110px"
        height="40px"
        color="#767676"
        letterSpacing="-0.25px"
      >
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
  top: 9%;
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
