import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../icon/ptit70x50-01.jpg'
import './App.css'
const Header = () => (
    <div>
    <Nav className="navbar navbar-expand-lg bg-light" fill variant="tabs" defaultActiveKey="/">
        <a class="navbar-brand" href="#">
        <img src={logo} width="70" height="50" style={{margin:0}} alt=""></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavLink className="nav-item nav-link"  exact to='/' activeStyle={{
                                                        fontWeight: "bold",
                                                        color: "black",
                                                        textDecoration: "underline"
                                                    }}>Trang chủ </NavLink>
                <NavLink className="nav-item nav-link" to='/user_management'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quản lý người dùng</NavLink>
                <NavLink className="nav-item nav-link"to='/log_management'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quản lý log truy cập</NavLink>
                <NavLink className="nav-item nav-link"to='/service_management'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quản lý dịch vụ truy cập</NavLink>
                <NavLink className="nav-item nav-link"to='/alert_broadcast'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Quảng bá cảnh báo</NavLink>
                <NavLink className="nav-item nav-link"to='/attack_detection'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Phát hiện tấn công</NavLink>
                <NavLink className="nav-item nav-link"to='/search'  activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "underline"
                                                }}>Tìm kiếm thông tin</NavLink>
            </div>
        </div>
    </Nav>
    
    </div>

    
)
export default Header;