import React from 'react';
import {Button,Typography,Menu,Avatar} from "antd"
import {Link} from "react-router-dom"
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined, MenuUnfoldOutlined} from "@ant-design/icons"
import icon from "../images/crypto.png"
export default function Navbar() {
  return <div className="nav-container">
      <div className="logo-container">
      <Avatar src={icon }  size="large"/>
          <Typography.Title   level={2} className="logo">
            <Link to="/">Ug Crypto</Link>
          </Typography.Title>
           <Menu theme="dark">
             <Menu.Item icon={<HomeOutlined/>}>
                 <Link to="/">Home</Link>
              </Menu.Item>   
              <Menu.Item icon={<FundOutlined/>}>
                 <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Menu.Item>   
              <Menu.Item icon={<MoneyCollectOutlined/>}>
                 <Link to="/exchanges">Exchanges</Link>
              </Menu.Item>   
              <Menu.Item icon={<BulbOutlined/>}>
                 <Link to="/news">News</Link>
              </Menu.Item> 
           </Menu>
           {/* <Button className="menu-control-container">
               
               </Button>  */}
      </div>

  </div>
}
