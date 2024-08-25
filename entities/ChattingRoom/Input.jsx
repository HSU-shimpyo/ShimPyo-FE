import React from 'react'
import styled from 'styled-components'
import ExportIcon from '../../assets/images/export.png'
export default function Input() {
  return (
    <Wrap>
        <StyledInput
            placeholder="궁금한 점을 숨숨이에게 물어보세요!"
            placeholderTextColor="#767676"
            returnKeyType="done"
        />
        <WrapIcon>
            <Icon source={ExportIcon}/>
        </WrapIcon>
    </Wrap>
 
  )
}
const Wrap = styled.View`
width : 327px;
height : 56px;
margin-bottom : 24px;
`;
const StyledInput = styled.TextInput`
border : 1px solid #E5E5EC;
width : 100%;
height : 100%;
border-radius : 24px;
background-color : #F7F7FB;
padding-left : 14px;
`;
const WrapIcon = styled.View`
width : 28px;
height : 28px;
background-color : #999;
border-radius : 100px;
position : absolute;
right : 14px;
top : 20%;
justify-content : center;
align-items : center;
`;
const Icon = styled.TextInput`
position : absolute;
width : 20px;
height : 20px;
z-index : 1;
`;