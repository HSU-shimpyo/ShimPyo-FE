import React,{useState} from 'react'
import styled from 'styled-components'
import Card from './Card';
import { ScrollView } from 'react-native';
import Arrow from '../../../assets/images/swipeArrow.png'
import Jy from '../../../assets/images/jy.png'
import Ye from '../../../assets/images/ye.png'
import Hj from '../../../assets/images/hj.png'
import Je from '../../../assets/images/je.png'
import Kn from '../../../assets/images/kn.png'

export default function AboutUs() {
  const [itemWidth, setItemWidth] = useState(0);
  
  const member =[
    {
        name : "이주연",
        part : "Front-End",
        email : "2191047@hansung.ac.kr",
        img : Jy
    },
    {
        name : "임예은",
        part : "Front-End",
        email : "2271514@hansung.ac.kr",
        img : Ye
    },
    {
        name : "임혜정",
        part : "Back-End",
        email : "2191233@hansung.ac.kr",
        img : Hj
    },
    {
        name : "김정은",
        part : "Back-End",
        email : "2211013@hansung.ac.kr",
        img : Je
    },
    {
        name : "권기남",
        part : "Designer",
        email : "rlska0711@hansung.ac.kr",
        img : Kn
    },
];
  return (
    
    <MainLayout>

        <WrapText opacity="0">
          <ArrowImg source={Arrow}/>
          <StyledText>
            좌우로 스와이프 해보세요!
          </StyledText>
        </WrapText>

        <WrapCard>
          <ScrollView
                  horizontal //스크롤 방향 
                  nestedScrollEnabled={true} //독립적으로 스크롤
                  contentContainerStyle={{ width: `${100 * member.length}%` }} //자식 요소들을 포함하는 컨테이너에 스타일
                  scrollEventThrottle={200} //스크롤 이벤트를 호출할 빈도
                  decelerationRate="fast"
                  onContentSizeChange={w => setItemWidth(w / member.length)}
                  showsHorizontalScrollIndicator={false} //스크롤바 표시 여부
                  bounces={false} //스크롤 끝에 도달 했을 때 바운스, true -> 바운스 있음 , false -> 바운스 없음
              >
          {
            member.map((item,index) => (
              <Card 
                key={index}
                name={item.name} 
                part={item.part} 
                email={item.email} 
                img={item.img} 
                length={member.length}
                marginLeft={index===0 ? "47px" : "0px"}
                />
            ))
          }
          </ScrollView>
        </WrapCard>

        <WrapText>
          <ArrowImg source={Arrow}/>
          <StyledText>
            좌우로 스와이프 해보세요!
          </StyledText>
        </WrapText>
        
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
height : 100%;
position : absolute;
justify-content : space-around;
align-items : center;
bakground-color : #F7F7FB;
`;

const WrapCard = styled.View`
justify-content : center;
align-items : center;
height : 57%;
width : 100%;
`;

const StyledText = styled.Text`
color : #767676;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
`;
const WrapText = styled.View`
height : 6%;
width : 100%;
justify-content : space-between;
align-items : center;
margin-bottom : 10%;
`;
const ArrowImg = styled.Image`
width : 86px;
height : 9px;
`;
