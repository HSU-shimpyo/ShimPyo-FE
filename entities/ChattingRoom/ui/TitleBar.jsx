import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import closeButton from '../../../assets/images/closebutton.png';
import icon from '../../../assets/images/pencil.png';
import { modifyChatRoomTitle } from '../api/ChattingRoomAPi';
import { useNavigation } from '@react-navigation/native';
export default function TitleBar({roomId, title}) {  
  const navigation = useNavigation();
  const [name, setName] = useState(title);
  const [isEditAble, setIsEditable] = useState(true);

  const modifiedTitle = (title) => {
    setIsEditable(true)
    modifyChatRoomTitle(roomId,title)
  }

  return (
    <MainLayout>

      {/* Close 버튼 (왼쪽) */}
      <CloseButtonWrapper 
        opacity="0"
        onPress={() => navigation.navigate('SumAiChat')} // 페이지 이동 
      >
        <CloseButton source={closeButton} />
      </CloseButtonWrapper>

      {/* 질문방 제목 */}
      <WrapTitle>
        <Title
          placeholder={name}
          value={name==="" ? "채팅방1" : name}
          onChangeText={text => setName(text)}
          color={isEditAble ? "#111" : "#767676"}
          editable={isEditAble ? false : true}
          selectTextOnFocus={isEditAble ? false : true}
          onSubmitEditing={()=>modifiedTitle(name)} // 완료버튼을 눌렀을 때
        />

        <IconWrap onPress={() => setIsEditable(false)} >
          <PencilIcon source={icon} display={isEditAble ? 'flex' : 'none'} />
        </IconWrap>
      </WrapTitle>

      {/* Close 버튼 (오른쪽) */}
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
  height: 115px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
`;

const WrapTitle = styled.View`
  flex-direction: row;
  height: 28px;
<<<<<<< HEAD:entities/ChattingRoom/TitleBar.jsx
  margin-top:60px;

=======
  margin-top : 10%;
>>>>>>> a98cb29f9e104de3ed5b0911e352fc5d3a55ab6f:entities/ChattingRoom/ui/TitleBar.jsx
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
  margin-top: 10%;
`;

const CloseButton = styled.Image`
  width: 28px;
  height: 28px;
  margin-right: 24px;
    margin-top:60px;

`;
