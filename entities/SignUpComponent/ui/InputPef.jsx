import React from 'react'
import styled from 'styled-components'
import Input from '../../SignUpComponent/ui/Input'
export default function InputPef({setPef}) {
  return (
    <MainLayout>

      <Input type="최대호기량(PEF)" pleacholder="평소 최대호기량을 입력해주세요" setValue={setPef}/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
padding-left : 24px;
`;