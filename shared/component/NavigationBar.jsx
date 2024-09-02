import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigation } from "@react-navigation/native";

// 이미지
import home from '../../assets/images/home.png';
import selectedHome from '../../assets/images/colorhome.png';
import History from '../../assets/images/ruler.png';
import selectedHistory from '../../assets/images/colorruler.png';
import sumsum from '../../assets/images/sumsum.png';
import selectedSumsum from '../../assets/images/colorsumsum.png';

export default function NavigationBar({main, history ,chat}) {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState("home");

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
        if (tab === "home") {
            navigation.navigate("Main");
        } else if (tab === "history") {
            navigation.navigate("SumHistory"); 
        } else if (tab === "sumsum") {
            navigation.navigate("SumAiChat"); 
        }
    };

    return (
        <MainLayout>
            {/* 홈 */}
            {
                main ? (
                    <Menu onPress={() => handleTabPress("home")}>
                        <MenuImage source={selectedHome}/>
                        <StyledText color="#3776CB">홈</StyledText>
                    </Menu>
                ) : (
                    <Menu onPress={() => handleTabPress("home")}>
                        <MenuImage source={home}/>
                        <StyledText color="#767676">홈</StyledText>
                    </Menu>
                )
            }

            {/* 숨 지표 */}
            {
                history ? (
                <Menu onPress={() => handleTabPress("history")}>
                    <MenuImage source={selectedHistory}/>
                    <StyledText color="#3776CB">숨 지표</StyledText>
                </Menu>
                ) : (
                <Menu onPress={() => handleTabPress("history")}>
                    <MenuImage source={History}/>
                    <StyledText color="#767676">숨 지표</StyledText>
                </Menu>
                )
            }

            {/* 숨숨이 */}
            {
                chat ? (
                    <Menu onPress={() => handleTabPress("sumsum")}>
                        <MenuImage source={selectedSumsum}/>
                        <StyledText color="#3776CB">숨숨이</StyledText>
                    </Menu>
                ) :
                (
                    <Menu onPress={() => handleTabPress("sumsum")}>
                        <MenuImage source={sumsum}/>
                        <StyledText color="#767676">숨숨이</StyledText>
                    </Menu>
                )
            }
        </MainLayout>
    );
}

const MainLayout = styled.View`
  width: 100%;
  height: 76px;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
`;

const Menu = styled.TouchableOpacity`
  width: 125px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${({ color }) => color || '#767676'};
  font-size: 11px;
  font-weight: 400;
`;

const MenuImage = styled.Image`
  width: 28px;
  height: 28px;
`;
