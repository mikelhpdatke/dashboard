import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import logo from '../icon/logo-01.jpg'

const Header = () => (
    <Navbar className="navbar navbar-default fixed-top ">
        <div className="container-fuild">
                {//<a class="navbar-brand" href="#">
                }
            <img className="img pull-left" src={logo}  alt=""/>
                {//</a>
                }
            <ul style={{fontFamily:"Myriad Pro", fontWeight:'bold', color:'red'}} className="nav navbar-nav" >
                <li><NavLink exact to='/' activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Trang chủ </NavLink></li>
                <li><NavLink to='/user_management'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quản lý người dùng</NavLink></li>
                <li><NavLink to='/log_management'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quản lý log truy cập</NavLink></li>
                <li><NavLink to='/service_management'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quản lý dịch vụ truy cập</NavLink></li>
                <li><NavLink to='/alert_broadcast'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quảng bá cảnh báo</NavLink></li>
                <li><NavLink to='/attack_detection'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Phát hiện tấn công</NavLink></li>
                <li><NavLink to='/search'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Tìm kiếm thông tin</NavLink></li>    
            </ul>
        </div>
    </Navbar>
)
export default Header;