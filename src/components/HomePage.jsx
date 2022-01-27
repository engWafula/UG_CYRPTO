import React from 'react';
import millify from 'millify';
import {Row,Col,Statistic,Typography} from "antd"
import {Link } from "react-router-dom"
import { useGetCryptosQuery } from '../services/CryptoApi';

//i destructure the Typography component in antd  to  get  The Title property
const {Title} =Typography

export default function HomePage() {
    const {data,isFetching} = useGetCryptosQuery();
    const globalStats =data?.data?.stats
    if(isFetching) return "Loading........."
    // console.log(data)
  return (
  <>
            <Title level={2} className="heading">Global Crypto Statistics</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.Exchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
  </>
  )
   

  
}
