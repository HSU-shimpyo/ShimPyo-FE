import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';

export default function Loading() {
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    const animateDots = () => {
        Animated.loop(
            Animated.stagger(150, [
                Animated.sequence([
                    Animated.timing(dot1, {
                        toValue: 0.5,
                        duration: 300,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot1, {
                        toValue: 0,
                        duration: 300,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(dot2, {
                        toValue: 0.5,
                        duration: 300,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot2, {
                        toValue: 0,
                        duration: 300,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(dot3, {
                        toValue: 0.5,
                        duration: 300,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot3, {
                        toValue: 0,
                        duration: 300,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                ]),
            ])
        ).start();
    };

    useEffect(() => {
        animateDots();
    }, [dot1, dot2, dot3]);

    const getTranslateY = (dot) => {
        return dot.interpolate({
            inputRange: [0, 1],
            outputRange: [10, -20], // 점의 움직임 범위
        });
    };

    return (
        <MainLayout>
            <Dot style={{ transform: [{ translateY: getTranslateY(dot1) }], }} />
            <Dot style={{ transform: [{ translateY: getTranslateY(dot2) }], }} />
            <Dot style={{ transform: [{ translateY: getTranslateY(dot3) }], }} />
        </MainLayout>
    );
}

const MainLayout = styled.View`
  background-color: #fff;
  border-radius: 0px 8px 8px 8px;
  padding: 12px;
  width: 68px;
  height: 44px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Dot = styled(Animated.View)`
  width: 8px;
  height: 8px;
  background-color: #767676;
  border-radius: 100px;
  margin-bottom : 20%;
`;

