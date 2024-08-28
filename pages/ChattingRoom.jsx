import React from 'react'
import styled from 'styled-components'
import ToolBar from '../shared/component/ToolBar';
import Input from '../entities/ChattingRoom/Input'
import ChattingContent from '../entities/ChattingRoom/ChattingContent';

import TitleBar from '../entities/ChattingRoom/TitleBar';
export default function ChattingRoom() {

  return (
    <MainLayout>

        {/* 상단바 */}
        <TitleBar/>

        {/* 채팅 내용 */}
        <ChattingContent/>

        {/* 입력창 */}
        <Input/>

    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 100%;
align-items : center;
justify-content : space-between;
`;

const StyledText = styled.Text`

`;