import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import headphone from '../../../assets/images/chatIcon.png';
import { Animated } from 'react-native';

export default function DefaultChat({ messages, setMessages }) {
  const [rotation, setRotation] = useState(0); // 회전값을 상태로 관리
    // 좌우 흔들기 애니메이션
    useEffect(() => {
      let direction = 1; // 회전 방향 설정
      const intervalId = setInterval(() => {
        setRotation((prevRotation) => {
          const nextRotation = prevRotation + (direction * 8); // 5도씩 회전
          if (nextRotation > 15 || nextRotation < -15) {
            direction *= -1; // 회전 방향을 반대로 변경
          }
          return nextRotation;
        });
      }, 50); // 100ms마다 실행
  
      return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 제거
    }, []);

  const QuestionArray = [
    "호기량 늘리는 운동법",
    "천식에 좋은 음식",
    "계절에 따른 천식 관리법",
    "천식 증상"
  ];

  const exampleAnswers = {
    "호기량 늘리는 운동법": "호기량을 늘리기 위해서는 꾸준한 유산소 운동과 호흡 훈련이 도움이 됩니다.",
    "천식에 좋은 음식": "천식에 좋은 음식으로는 항산화제가 풍부한 과일과 채소, 오메가-3 지방산이 많은 생선이 있습니다.",
    "계절에 따른 천식 관리법": "계절에 따라 천식 관리법이 달라질 수 있으며, 봄과 가을철에는 알레르기 유발 물질에 주의해야 합니다.",
    "천식 증상": "천식의 주요 증상으로는 기침, 호흡 곤란, 천명음 등이 있습니다."
  };

  const handleQuestionClick = (question) => {
    const answer = exampleAnswers[question];
    setMessages(prevMessages => [
      ...prevMessages,
      { type: 'user', content: question }
    ]);
    setMessages(prevMessages => [
      ...prevMessages,
      { type: 'ai', content: answer }
    ]);
  };

  return (
    <MainLayout>

      <Icon source={headphone} style={{ transform: `rotate(${rotation}deg)` }} />

      <WelcomeMsg>
        <StyledText>안녕하세요, 이주연님!   쉼표 AI 챗봇 숨숨이에요. 무엇이 궁금하실까요?</StyledText>
      </WelcomeMsg>

      <DefaultSection>
        {QuestionArray.map((content, index) => (
          <DefaultQuestion key={index} onPress={() => handleQuestionClick(content)}>
            <StyledText color="#4188DE">{content}</StyledText>
          </DefaultQuestion>
        ))}
      </DefaultSection>

    </MainLayout>
  );
}

const MainLayout = styled.View`
padding-left : 5%;
`;

const WelcomeMsg = styled.View`
  background-color: #fff;
  border-radius: 0px 8px 8px 8px;
  padding: 12px;
  max-width: 47%; 
  margin-top : 10px;
  margin-bottom : 12px;
`;

const StyledText = styled.Text`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  color: ${({ color }) => color || '#505050'};
`;

const DefaultSection = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  `;

const DefaultQuestion = styled.TouchableOpacity`
  background-color: #fff;
  align-self: flex-start;
  padding: 8px 12px;
  border: 1px solid #4188DE;
  border-radius: 100px;
  margin-bottom: 8px;
  margin-right: 8px;
`;

const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;
