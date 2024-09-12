import React from 'react'
import styled from 'styled-components'
export default function Info() {
    return (
        <MainLayout>
            <StyledText color="#000" fontSize="20px" fontWeight="600" lineHeight="28px" letterSpacing="-0.5px">오늘의 천식 정보</StyledText>

            <StyledText color="#000" fontSize="14px">“심리 상태와 연관된 천식 증상”</StyledText>

            <StyledText>
                심리적인 상태가 천식 증상 발작에 많은 영향을 미치고 있습니다. 실제 시험이나 집안일로 신경을 몹시 쓴다든지, 야단을 맞거나 부모의 이혼 등 정신적인 스트레스가 있을 때 천식 증세가 악화되는 것을 종종 접하게 됩니다. 이는 심리적 긴장 시 부교감 신경이 자극되어 기관지 수축이 심해지기 때문입니다.
                따라서 천식 환자들은 가능한 심적으로 여유로운 생활을 하는 것이 천식의 치료에 도움이 됩니다.
            </StyledText>

            <StyledText>

                소아 천식에서는 매우 드물지만, 5~10%의 성인 기관지 천식 환자는 아스피린이나 이와 유사한 소염 진통제를 먹으면 천식 발작이 일어날 수 있습니다.
                특히, 축농증과 코안에 물혹이 있는 천식 환자는 아스피린 사용 시 40% 이상에서 천식 발작의 위험이 있으므로 세심한 주의가 필요합니다.
                해열 진통 효과를 목적으로 할 경우에는 아스피린 대신에 아세트아미노펜(타이레놀)을 비교적 안전하게 사용할 수 있습니다.
            </StyledText>

        </MainLayout>
    )
}


const MainLayout = styled.View`
    width: 327px;
    height: 476px;
    background-color: #fff;
    border-radius: 24px;
    justify-content : space-evenly;
    align-items: start;
    margin-top : 32px;
    padding : 24px 20px 24px 20px;
`;

const StyledText = styled.Text`
  color: ${({ color }) => color || '#505050'};
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  line-height: ${({ lineHeight }) => lineHeight || '20px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '-0.35px'};
`;