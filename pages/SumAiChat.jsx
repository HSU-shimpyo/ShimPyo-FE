import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBar from '../entities/SumAiChat/ui/TitleBar';
import Search from '../entities/SumAiChat/ui/Search';
import FloatingButton from '../entities/SumAiChat/ui/FloatingButton';
import NavigationBar from '../shared/component/NavigationBar';
import { ScrollView, Text, View } from 'react-native';

const dummyData = [
  {
    id: 1,
    title: '증상',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
  {
    id: 2,
    title: '최대호기량이란?',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
  {
    id: 3,
    title: '종류',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
  {
    id: 4,
    title: '질문방 제목',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
  {
    id: 5,
    title: '질문방 제목',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
  {
    id: 6,
    title: '천식에 나쁜 음식',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
  {
    id: 7,
    title: '천식에 좋은 음식',
    description: '동해물과 백두산이 동해물과 백두산이동해물과 백두산이 동해물과 백두산이...',
    time: '3분 전',
  },
];

export default function SumAiChat() {
  const [searchQuery, setSearchQuery] = useState('');

  // 검색어를 기준으로 데이터 필터링
  const filteredData = dummyData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      {/* 타이틀 바 */}
      <TitleBar />

      {/* 검색창 */}
      <Search setSearchQuery={setSearchQuery} />

      <ScrollContainer>
        <MainLayout>
          {/* 필터링된 질문방 더미데이터 */}
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <QuestionBox key={item.id}>
                <BoxHeader>
                  <TitleText>{item.title}</TitleText>
                  <TimeText>{item.time}</TimeText>
                </BoxHeader>
                <DescriptionText>{item.description}</DescriptionText>
              </QuestionBox>
            ))
          ) : (
            <NoResultsText>검색 결과가 없습니다.</NoResultsText>
          )}
        </MainLayout>
      </ScrollContainer>

      {/* 플로팅 버튼 */}
      <FloatingButtonContainer>
        <FloatingButton />
      </FloatingButtonContainer>

      {/* 네비게이션 바 */}
      <NavigationBarContainer>
        <NavigationBar SumAiChat />
      </NavigationBarContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #F7F7FB;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #F7F7FB;
`;

const MainLayout = styled.View`
  align-items: center;
  background-color: #F7F7FB;
`;

const QuestionBox = styled.View`
  width: 327px;
  height: 108px;
  border-radius: 12px;
  background-color: #FFF;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 12px;
`;

const BoxHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TitleText = styled.Text`
  color: #111;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

const TimeText = styled.Text`
  color: #505050;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const DescriptionText = styled.Text`
  color: #767676;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const NoResultsText = styled.Text`
  color: #767676;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`;

const FloatingButtonContainer = styled.View`
  position: absolute;
  bottom: 70px;
  right: 30px;
`;

const NavigationBarContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
