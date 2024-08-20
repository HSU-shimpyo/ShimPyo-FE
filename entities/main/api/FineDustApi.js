import axios from "axios";

export async function getFineDust() {
    try {
        const response = await axios.get('http://openapi.seoul.go.kr:8088/754d517947646c7737366e47555352/json/ListAvgOfSeoulAirQualityService/1/5');
        
        //응답 데이터에서 미세먼지 농도 값 추출
        const dustData = response.data.ListAvgOfSeoulAirQualityService.row;

        if (dustData && dustData.length > 0) {
            const firstEntry = dustData[0];

            const pm10 = firstEntry.PM10;
            const pm25 = firstEntry.PM25;

            // console.log("미세먼지 농도:", pm10);
            // console.log("초미세먼지 농도:", pm25);

            return { pm10, pm25 };
        } else {
            console.error('No data available');
        }
    } catch (error) {
        console.error('Error fetching fine dust data:', error);
    }
}
