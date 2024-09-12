import React from 'react';
import styled from 'styled-components';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AiChat from './AiChat';
import MyChat from './MyChat';
import DefaultChat from './DefaultChat';
import Input from './Input';
export default function ChattingContent() {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}       
    style={{ flex: 1 }}
    keyboardVerticalOffset={10}  

    >
      <Container>
      <MainLayout>
        <ScrollViewContainer>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
            <BasicContainer>
              {/* 인사 */}
              <AiChat /> 

            {/* 기존에 있는 질문 */}
            <DefaultChat />

            </BasicContainer>

          {/* <MyChat />  */}
          </ScrollView>
        </ScrollViewContainer>

        {/* 고정된 인풋창 */}

      </MainLayout>
      </Container>
    </KeyboardAvoidingView>
  );
}

const ScrollViewContainer = styled.View`
  width: 388px;
  height:100%;
  background-color: #F1F1F5; 
  border:1px;
  bottom:56px;
`;

const MainLayout = styled.View`
  flex: 1;
  width:100%;
  justify-content: flex-end;
  background-color: #F1F1F5; 
  
`;

const Container=styled.View`
width:100%;
flex:1;
justify-content:center;
align-items:center;
background-color:#111;
`;

const InputContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: #F1F1F5; 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border:1px;
`;

const BasicContainer=styled.View`
   flex: 1;
  width:100%;
  justify-content: flex-end;
  margin-left:10px;
  top:155px;
`;