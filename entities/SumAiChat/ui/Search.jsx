import React from 'react'
import styled from 'styled-components'
import glasses from '../../../assets/images/glasses2.png'
export default function Search() {
  return (
    <WrapInput>
        <Icon source={glasses}/>
        <Input
            placeholder="검색어를 입력하세요"
            placeholderTextColor="#767676"
            returnKeyType="done"
        />
    </WrapInput>
  )
}
const WrapInput = styled.View`
width : 327px;
height : 56px;
background-color : #F1F1F5;
border : 1px solid #E5E5EC;
border-radius : 100px;
margin-top : 8px;
margin-bottom : 150px;
`;
const Input = styled.TextInput`
width : 100%;
height : 100%;
padding-left : 53px;
`;

const Icon = styled.Image`
width : 24px;
height : 24px;
position : absolute;
margin-top : 16px;
margin-left : 22px;
`;
