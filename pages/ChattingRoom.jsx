import React from 'react';
import styled from 'styled-components';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import ToolBar from '../shared/component/ToolBar';
import Input from '../entities/ChattingRoom/Input';
import ChattingContent from '../entities/ChattingRoom/ChattingContent';
import TitleBar from '../entities/ChattingRoom/TitleBar';

export default function ChattingRoom(navigation) {
  const scrollViewRef = useRef();
  const [isUserScrolled, setIsUserScrolled] = useState(false); // 사용자가 스크롤했는지 추적하는 상태

  // 새 메시지가 추가되면 자동으로 스크롤이 아래로 이동하도록 설정
  const scrollToBottom = () => {
    if (!isUserScrolled) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  };

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const distanceFromBottom = contentSize.height - contentOffset.y - layoutMeasurement.height;

    // 사용자가 스크롤을 맨 아래까지 내리지 않았을 때는 자동 스크롤 방지
    if (distanceFromBottom > 50) {
      setIsUserScrolled(true); // 사용자가 스크롤을 올렸을 경우
    } else {
      setIsUserScrolled(false); // 스크롤을 맨 아래로 내렸을 경우
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -20: 0} // iOS에서 키보드 높이 보정
    >
      <MainLayout>
        {/* 상단바는 고정 */}
        <TitleBar />

        {/* 채팅 내용 및 입력창 */}
        <ScrollViewContainer>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            onContentSizeChange={scrollToBottom} // 채팅 추가 시 스크롤 아래로 이동
            onScroll={handleScroll} // 사용자의 스크롤을 감지
            scrollEventThrottle={16} // 스크롤 이벤트 업데이트 간격
          >
            <ChattingContent />
          </ScrollView>
        </ScrollViewContainer>

        {/* 입력창 */}
        <InputContainer>
          <Input />
        </InputContainer>
      </MainLayout>
    </KeyboardAvoidingView>
  );
}

const MainLayout = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start; /* TitleBar를 상단에 고정 */
  background-color: #F1F1F5;
`;

const ScrollViewContainer = styled.View`
  width: 100%;
  max-height: 623px; /* 채팅 영역의 높이 고정 */
  background-color: #F1F1F5;
  border: 1px solid #e5e5e5;
`;

const InputContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: #f1f1f5;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border:1px;
`;
