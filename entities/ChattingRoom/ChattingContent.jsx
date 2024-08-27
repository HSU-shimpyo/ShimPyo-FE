import React from 'react'
import styled from 'styled-components'
import AiChat from './AiChat';
import MyChat from './MyChat';
import DefaultChat from './DefaultChat';
export default function ChattingContent() {
  return (
    <MainLayout>
      <DefaultChat/>
        {/* <AiChat/>
        <MyChat/> */}
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 75%;
justify-content : flex-end;
`;
