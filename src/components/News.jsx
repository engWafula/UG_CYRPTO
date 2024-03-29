import React from 'react';
import {Select,Card,Typography,Row,Col,Avatar} from "antd"
 import { useGetCryptosQuery } from '../services/CryptoApi';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import moment from "moment"
import {useState} from "react"
import Loader from "./Loader"
const {Title,Text} = Typography
const {Option} = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
export default function News({simplified}) {
    const { data} = useGetCryptosQuery(100);
    const[newsCategory,setNewsCategory]=useState('Cryptocurrency')
    const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory,count:simplified?6:100});
   
 
    console.log("working");

   console.log(cryptoNews.value);

    if (!cryptoNews?.value) return <Loader/>
  return(
      <div>
        <Row gutter={[24, 24]}>
        {!simplified&&(
          <Col span={24}>
          <Select showSearch className="select-news"
          optionFilterProp="children"
           placeholder="Select News Category"
          onChange={(value)=>setNewsCategory(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
          
              {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          
          </Select>
        
          </Col>
        )}
              {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" width="100" height="100" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
        </Row>

      </div>
  )
}
