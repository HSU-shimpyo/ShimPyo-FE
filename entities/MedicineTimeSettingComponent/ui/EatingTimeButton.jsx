import React from 'react';
import styled from 'styled-components/native';

export default function EatingTimeButton() {
  // 더미 데이터 (하나만 선택되도록 설정)
  const selectedData = {
    option: '식후', // 만약 식후를 선택했을 때
    time: null,     // 선택되지 않았을 때는 null 써주기
  };

  // 현재 설정된 페이지로, 더미 데이터를 기반으로 색상이 적용된 버튼을 표시
  return (
    <Container>
      <ButtonContainer>
        <StyledLeftButton
          isSelected={selectedData.option === '식후' && !selectedData.time}
        >
          <ButtonText isSelected={selectedData.option === '식후' && !selectedData.time}>
            식후
          </ButtonText>
        </StyledLeftButton>
        <StyledRightButton
          isSelected={!selectedData.option && selectedData.time === '30분'}
        >
          <ButtonText isSelected={!selectedData.option && selectedData.time === '30분'}>
            30분
          </ButtonText>
        </StyledRightButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 327px;
  height: 64px;
  margin-top: -100px;
`;

const StyledLeftButton = styled.View`
  width: 164px;
  height: 64px;
  background-color: ${(props) => (props.isSelected ? '#C2DDF8' : '#FFFFFF')};
  justify-content: center;
  align-items: center;
  border-radius: 24px 0px 0px 24px;
`;

const StyledRightButton = styled.View`
  width: 164px;
  height: 64px;
  background-color: ${(props) => (props.isSelected ? '#C2DDF8' : '#FFFFFF')};
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 24px 0px;
`;

const ButtonText = styled.Text`
  color: #111111;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
`;

