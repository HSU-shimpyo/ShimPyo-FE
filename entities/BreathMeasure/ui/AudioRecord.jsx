import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import PlayAudio from './PlayAudio';

export default function App() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [audioFile, setAudioFile] = useState();

  async function startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    setAudioFile(uri);
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      <PlayAudio file={audioFile}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'centet',
    marginTop : '50%',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});