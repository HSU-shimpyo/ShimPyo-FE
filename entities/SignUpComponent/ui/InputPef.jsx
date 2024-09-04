import React from 'react'
import styled from 'styled-components'
import Input from '../../SignUpComponent/ui/Input'
export default function InputPef() {
  return (
    <MainLayout>

      <Input type="최대호기량(PEF)" pleacholder="평소 최대호기량을 입력해주세요"/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
border : 1px solid red;
width : 100%;
height : 70%;
padding-left : 24px;
`;