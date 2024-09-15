import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleBar from '../entities/SumAiChat/ui/TitleBar';
import Search from '../entities/SumAiChat/ui/Search';
import FloatingButton from '../entities/SumAiChat/ui/FloatingButton';
import NavigationBar from '../shared/component/NavigationBar';
import { getAllChatRoom } from '../entities/SumAiChat/api/SumAiChatApi';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native-gesture-handler';

export default function SumAiChat() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [rooms, setRooms] = useState([]);
  const navigetion = useNavigation();

  const loadChattingRoomList = () => {
    getAllChatRoom().then((res) => {
      setRooms(res);
    })
  }

  useEffect(() => {
    loadChattingRoomList()
  }, [])

  const clickBox = (roomId, title) => {
    navigetion.navigate("ChattingRoom", { roomId,title })
  }

  // 검색어를 기준으로 데이터 필터링
  const filteredData = rooms.filter((item) =>
    item.chatRoomTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    loadChattingRoomList()
    setIsRefreshing(false);
  };

  return (
    <Container>
      {/* 타이틀 바 */}
      <TitleBar />

      {/* 검색창 */}
      <Search setSearchQuery={setSearchQuery} />

      <ScrollContainer refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}>
        <MainLayout>
          {/* 필터링된 질문방 더미데이터 */}
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <QuestionBox key={item.chatRoomId} onPress={() => clickBox(item.chatRoomId, item.chatRoomTitle)}>
                <BoxHeader>
                  <TitleText>{item.chatRoomTitle}</TitleText>
                  <TimeText>{item.lastChatAt}</TimeText>
                </BoxHeader>
                <DescriptionText>
                  {truncateText(item.lastChat, 65)}
                </DescriptionText>
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
      <NavigationBar chat />
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
    padding-bottom : 20%;
`;

const QuestionBox = styled.TouchableOpacity`
  width: 327px;
  height: 108px;
  border-radius: 12px;
  background-color: #FFF;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 12px;
  shadow-color: rgba(0, 0, 0, 0.04);
  shadow-offset: 0px 20px;
  shadow-opacity: 0.44;
  shadow-radius: 44px;
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
