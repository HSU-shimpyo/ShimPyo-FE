import React,{useState} from 'react'
import styled from 'styled-components'
import InputInfo from './InputInfo';
import InputPef from './InputPef'
export default function InputComponent({
    setName,
    setId,
    setPassword,
    setBirth,
    setPef,
    isInputComplete,
    
}
) {
  return (
    <MainLayout>

        {
            !isInputComplete 
            &&
            <InputInfo
                setName={setName}
                setId={setId}
                setPassword={setPassword}
                setBirth={setBirth}
            />
        }

        {isInputComplete && <InputPef setPef={setPef}/>}
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 50%;
`;
