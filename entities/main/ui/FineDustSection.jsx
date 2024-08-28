import React,{useEffect, useState} from 'react'

import styled from 'styled-components'

import FineDustComponent from './FineDustComponent';

//api
import {getFineDust} from '../api/FineDustApi'
    
export default function FineDustSection() {
    const [PM10, setPM10] = useState(""); //미세먼지
    const [PM25, setPM25] = useState(""); //초미세먼지

    useEffect(()=>{
        getFineDust().then(data => {
          if (data) {
              setPM10(data.pm10);
              setPM25(data.pm25);
          } else {
              console.log("데이터를 가져오는데 실패했습니다.");
          }
      });
      },[])

    return (
    <MainLayout>
        
        {/* 미세먼지 */}
        <FineDustComponent value={PM10} text="미세먼지"/>

        {/* 초미세먼지 */}
        <FineDustComponent value={PM25} text="초미세먼지"/>

    </MainLayout>
    )
}
    
const MainLayout = styled.View`
flex-direction : row;
width : 350px;
justify-content : space-around;
position : relative;
bottom : 6%;
`;