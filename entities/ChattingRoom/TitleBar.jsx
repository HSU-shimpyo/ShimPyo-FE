import React, { useState } from 'react';
import styled from 'styled-components';
import closeButton from '../../assets/images/closebutton.png';
import icon from '../../assets/images/pencil.png';
import { TouchableOpacity } from 'react-native';

export default function TitleBar({ navigation }) {  // navigation 객체를 props로 받음
  const [name, setName] = useState("질문방1");
  const [isEditAble, setIsEditable] = useState(true);

  return (
    <MainLayout>

      {/* Close 버튼 */}
      <CloseButtonWrapper 
        opacity="0"
        onPress={() => navigation.navigate('SumAiChat')} // 페이지 이동 
      >
        <CloseButton source={closeButton} />
      </CloseButtonWrapper>

      <WrapTitle>
        {/* 질문방 제목 (수정가능) */}
        <Title
          placeholder={name}
          value={name}
          onChangeText={text => setName(text)}
          color={isEditAble ? "#111" : "#767676"}
          editable={isEditAble ? false : true}
          selectTextOnFocus={isEditAble ? false : true}
          onSubmitEditing={() => setIsEditable(true)} // 완료버튼을 눌렀을 때
        />

        <IconWrap onPress={() => setIsEditable(false)} >
          <PencilIcon source={icon} display={isEditAble ? 'flex' : 'none'} />
        </IconWrap>
      </WrapTitle>

      {/* Close 버튼 */}
      <CloseButtonWrapper 
        opacity="1"
        onPress={() => navigation.navigate('SumAiChat')} // SumAiChat 페이지로 이동
      >
        <CloseButton source={closeButton} />
      </CloseButtonWrapper>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
  background-color:#FFFFFF;
`;

const WrapTitle = styled.View`
  flex-direction: row;
  height: 28px;
`;

const Title = styled.TextInput`
  height: 28px;
  color: ${({ color }) => color || '#111'};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-right: 9.69rem;
`;

const IconWrap = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  margin-top: 7%;
`;

const PencilIcon = styled.Image`
  width: 100%;
  height: 100%;
  margin-left: 50%;
  margin-top: 10%;
  display: ${({ display }) => display || 'flex'};
`;

const CloseButtonWrapper = styled.TouchableOpacity`
  opacity: ${({ opacity }) => opacity || '0'};
`;

const CloseButton = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 24px;
`;
