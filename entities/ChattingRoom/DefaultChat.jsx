import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';

export default function DefaultChat() {
  const [chatLog, setChatLog] = useState([]);
  const scrollViewRef = useRef();  // ScrollView의 참조를 위한 useRef 사용

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
    setChatLog([...chatLog, { question, answer }]);
  };

  return (
    <MainLayout>
      <DefaultSection>
        {QuestionArray.map((content, index) => (
          <DefaultQuestion key={index} onPress={() => handleQuestionClick(content)}>
            <StyledText color="#4188DE">{content}</StyledText>
          </DefaultQuestion>
        ))}
      </DefaultSection>

      <ChatLogSection>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          ref={scrollViewRef}  // ScrollView 참조 설정
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {chatLog.map((log, index) => (
            <React.Fragment key={index}>
              <UserMessage>
                <StyledText color="#fff">{log.question}</StyledText>
              </UserMessage>
              <BotMessage>
                <StyledText color="#505050">{log.answer}</StyledText>
              </BotMessage>
            </React.Fragment>
          ))}
        </ScrollView>
      </ChatLogSection>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 0px 24px;
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
  flaot:start;
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

const ChatLogSection = styled.View`
  flex: 1;
`;

const UserMessage = styled.View`
  background-color: #3C63EC;
  align-self: flex-end;
  padding: 8px 12px;
  border-radius: 8px 0px 8px 8px;
  margin-bottom: 20px;
  max-width: 80%;

`;

const BotMessage = styled.View`
  background-color: #FFFFFF;
  align-self: flex-start;
  padding: 8px 12px;
  margin-bottom: 20px;
  max-width: 80%;
  border-radius: 0px 8px 8px 8px;
`;
