import React from 'react';
import styled from 'styled-components';
import AudioRecord from '../entities/BreathMeasure/ui/AudioRecord';
import PlayAudio from '../entities/BreathMeasure/ui/PlayAudio'
export default function BreathMeasure() {
  return (
    <MainLayout>
      <AudioRecord />
    </MainLayout>
  );
}

const MainLayout = styled.View`
  justify-content: center; /* 오타 수정 */
  flex: 1;
  align-items: center; /* 필요한 경우 추가 */
`;
