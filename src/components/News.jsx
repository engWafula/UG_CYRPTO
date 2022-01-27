import React from 'react';
import {Select,Card,Typography,Row,Col,Avatar} from "antd"
// import { useGetCryptosQuery } from '../services/cryptoApi';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import moment from "moment"

const {Title,Text} = Typography
const {Option} = Select

export default function News({simplified}) {
    const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:"Cryptocurrency",count:simplified?10:100});
    console.log(cryptoNews);

    if (!cryptoNews?.value) return "Loading...."
  return(
      <div>
        <Row gutter={[24, 24]}>
              {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
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
