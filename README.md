## 💨 천식 환자를 위한 딥러닝 모델 기반 호흡 관리 어플, 쉼표

> 쉼표는 천식 환자를 위한 어플리케이션으로,
> 별도의 호흡 측정기 없이 스마트폰에 내장된 마이크를 이용해 호흡을 측정하고
> <br/>이를 딥러닝 기반 호흡 분석 모델로 학습·분석하여 사용자가 자신의 천식 상태를 손쉽게 관리할 수 있도록 돕습니다.

<img width="100%" src="https://github.com/user-attachments/assets/b1827bfc-6f57-491d-922b-3179558846bd">

<br/><br/>

## 📌 서비스 소개

![쉼표 포스터](https://github.com/user-attachments/assets/c688eabd-518d-4b1d-86aa-819cad596733)

## ✨ 주요기능
1. 스마트폰에 내장되어 있는 마이크로 호흡을 측정하면 측정한 오디오 파일을 서버로 전송합니다.
2. 전송된 오디오를 딥러닝을 통해 학습한 모델을 이용하여 예측한 PEF(최대호기량)값을 반환합니다.
3. 반환된 값은 MySQL Datedase 내에 안전하게 저장됩니다.
4. 숨 지표 탭에서는 주간/월간 별로 기록된 PEF 값을 한눈에 파악할 수 있는 그래프를 제공합니다. 이를 통해 천식 환자는 개인의 호흡 패턴을 파악할 수 있습니다. 
5. 챗봇 AI 숨숨이를 통해 천식 관련 정보를 쉽고 빠르게 획득할 수 있습니다.
6. 쉼표를 통해 병원을 예약하고, 약 복용 시간을 설정할 수 있습니다. 

## 🛠️ Frontend 주요 기술
- **개발언어**: JavaScript
- **개발환경**: React Native
- **개발도구**: Visual Studio Code 

## 🧑‍💻 시스템 아키텍쳐
<img width="100%" src="https://github.com/user-attachments/assets/21c85a5a-cf0a-485b-abc5-3c7fea59afb1">

## 👩🏻‍💻 Developers

| FE | FE | 
|:---:|:---:|
| <img src="https://avatars.githubusercontent.com/u/104489022?v=4" width="150"/> | <img src="https://avatars.githubusercontent.com/u/111334319?v=4" width="150"/> |
| 이주연 | 임예은 |
| 약 복용 및 병원 예약 기능 구현<br/> 호흡 측정 기능 구현<br/> 주간/월간 데이터 관리 기능 구현<br/> AI 챗봇 기능 구현  | 회원가입, 로그인 UI/UX 구현 <br/> AI 챗봇 UI/UX 구현|
| [@Juye0nLee](https://github.com/Juye0nLee) | [@ye-eun-min201](https://github.com/ye-eun-min201) |

## 📹 시연
🔗 [youtube.com/watch?v=kqRJ8pE-y48&feature=youtu.be](https://youtu.be/kqRJ8pE-y48?si=TfVIJonGa_8zbsUt)
