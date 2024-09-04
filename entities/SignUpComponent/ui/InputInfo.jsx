import React from 'react'
import styled from 'styled-components'
import Input from './Input';
export default function InputInfo({
  setName,
  setId,
  setPassword,
  setBirth,
}) {
  return (
    <MainLayout>

        <Input type="이름" placeholder="이름을 입력해주세요" setValue={setName}/>

        <Input type="아이디" placeholder="아이디를 입력해주세요 (최소 8자 이상)" setValue={setId}/>

        <Input type="비밀번호" placeholder="비밀번호를 입력해주세요 (최소 10자 이상)" setValue={setPassword}/>

        <Input type="생년월일" placeholder="19990111 (8자리)" setValue={setBirth}/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
justify-content : space-between;
padding-left : 24px;
`;