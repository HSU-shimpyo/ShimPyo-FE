import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { getMonthlyState } from '../api/SumHistory';
export default function ThisMonthShimStatus() {
  const [good, setGood] = useState();
  const [warning, setWarning] = useState();
  const [danger, setDanger] = useState();
  const [maxState, setMaxState] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    getMonthlyState().then((res) => {
      setGood(res.good)
      setWarning(res.warning)
      setDanger(res.danger)
      setMaxState(res.maxState)
    })
  }, [])

  const renderContent = (maxState) => {
    switch (maxState) {
      case '양호':
        return (
          <WrapView>
            <Good>
              <StyledText
                color="#505050"
                fontSize="12px"
                fontWeight="600"
                lineHeight="18px"
                letterSpacing="-0.3px"
                padding="12px"> 양호
              </StyledText>
              <CountText fontSize="56px" marginTop="30%">
                {good}회
              </CountText>
            </Good>
            <Wrap>
              <Warning>
                <StyledText
                  color="#505050"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="18px"
                  letterSpacing="-0.3px"
                  padding="12px"> 경고
                </StyledText>
                <CountText paddingRight='12px'>
                  {warning}회
                </CountText>
              </Warning>
              <Danger>
                <StyledText
                  color="#505050"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="18px"
                  letterSpacing="-0.3px"
                  padding="12px"> 위험
                </StyledText>
                <CountText paddingRight='12px'>
                  {danger}회
                </CountText>
              </Danger>
            </Wrap>
          </WrapView>
        )

      case '경고':
        return (
          <WrapView flexDirection="column">
            <Warning width="287px" height="102px" marginBottom="4px">
              <StyledText
                color="#505050"
                fontSize="12px"
                fontWeight="600"
                lineHeight="18px"
                letterSpacing="-0.3px"
                padding="12px"> 경고
              </StyledText>
              <CountText fontSize="56px" paddingRight="10px">
                {warning}회
              </CountText>
            </Warning>
            <Wrap flexDirection="row">
              <Good width="142px" height="66px">
                <StyledText
                  color="#505050"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="18px"
                  letterSpacing="-0.3px"
                  padding="12px" > 양호
                </StyledText>
                <CountText paddingRight="12px">
                  {good}회
                </CountText>
              </Good>
              <Danger width="142px" height="66px">
                <StyledText
                  color="#505050"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="18px"
                  letterSpacing="-0.3px"
                  padding="12px"> 위험
                </StyledText>
                <CountText paddingRight="12px">
                  {danger}회
                </CountText>

              </Danger>
            </Wrap>
          </WrapView>
        )

      case '위험':
        return (
          <WrapView >
            <Wrap flexDirection="column">
              <Good width="129px" height="84px">
                <StyledText
                  color="#505050"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="18px"
                  letterSpacing="-0.3px"
                  padding="12px"> 양호
                </StyledText>
                <CountText paddingRight="12px">
                  {good}회
                </CountText>
              </Good>
              <Warning>
                <StyledText
                  color="#505050"
                  fontSize="12px"
                  fontWeight="600"
                  lineHeight="18px"
                  letterSpacing="-0.3px"
                  padding="12px" > 경고
                </StyledText>
                <CountText paddingRight="12px">
                  {warning}회
                </CountText>
              </Warning>
            </Wrap>
            <Danger width="154px" height="172px">
              <StyledText
                color="#505050"
                fontSize="12px"
                fontWeight="600"
                lineHeight="18px"
                letterSpacing="-0.3px"
                padding="12px"> 위험
              </StyledText>
              <CountText marginTop="30%" fontSize="56px" paddingRight="12px">
                {danger}회
              </CountText>
            </Danger>
          </WrapView>
        )
      default:
        return null;
    }
  }

  useEffect(() => {
    switch (maxState) {
      case '양호':
        setColor('#04B014');
        break;
      case '경고':
        setColor('#FA0');
        break;
      case '위험':
        setColor('#DC0000')
        break;
      default:
        setColor('#000'); 
        break;
    }
  }, [maxState]); 
  return (
    <MainLayout>

      <StyledText marginBottom="14px">
        <StyledText fontSize="13px" fontWeight="600" lineHeight="18px">이주연</StyledText>
        님의 월간 평균 최대 호기량
      </StyledText>

      <StyledText fontSize="16px" fontWeight="400" lineHeight="24px" marginBottom="24px">
        이번 달의 쉼 상태는 <StyledText color={color} fontSize="24px" fontWeight="600" lineHeight="34px" letterSpacing="-0.6px">{maxState}</StyledText> 입니다.
      </StyledText>

      {renderContent(maxState)}

    </MainLayout>
  )
}

const MainLayout = styled.View`
    width: 327px;
    height: 296px;
    background-color: #fff;
    border-radius: 24px;
    margin-top : 32px;
    padding : 24px 20px 24px 20px;
`;

const StyledText = styled.Text`
  color:  ${({ color }) => color || '#111'};
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || '13px'};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  line-height: ${({ lineHeight }) => lineHeight || '18px'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0.35px'};
  margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
  padding : ${({ padding }) => padding || '0px'};
`;

const CountText = styled.Text`
color: #505050;
text-align : right;
padding-right : ${({ paddingRight }) => paddingRight || '0px'};
padding-left : ${({ paddingLeft }) => paddingLeft || '0px'};
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '24px'};
font-style: normal;
font-weight: 600;
letter-spacing: -0.6px;
margin-top :${({ marginTop }) => marginTop || '0px'};
margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
`;

const WrapView = styled.View`
flex-direction : ${({ flexDirection }) => flexDirection || 'row'};
justify-content : center;
aling-items : center;
`;

const Wrap = styled.View`
flex-direction : ${({ flexDirection }) => flexDirection || 'column'};
justify-content : space-between;
`;

const Good = styled.View`
width :${({ width }) => width || '154px'};
height :${({ height }) => height || '172px'};
background-color : #B0F2C2;
border-radius: 12px;
margin-right : 4px;
`;

const Warning = styled.View`
width :${({ width }) => width || '129px'};
height :${({ height }) => height || '84px'};
background-color : #FDF9C4;
border-radius: 12px;
margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
`;

const Danger = styled.View`
width :${({ width }) => width || '129px'};
height :${({ height }) => height || '84px'};
background-color : #FABFB7;
border-radius: 12px;
`;
