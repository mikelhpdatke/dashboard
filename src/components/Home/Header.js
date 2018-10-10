import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, Image} from 'react-bootstrap'
import logo from '../../icon/logo-01.jpg'
import cap from '../../icon/cap.svg'
/*
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
*/
const Header = () => (
    <Navbar className="navbar navbar-default fixed-top">
        <div className="container-fluid">
                <a class="navbar-brand" href="#">
                <img className="img" src={logo} alt=""/>
                </a>
            <ul className="nav navbar-nav">
                <li className="active"><Link to='/'>Trang chủ </Link></li>
                <li><Link to='/'>Quản lý người dùng</Link></li>
                <li><Link to='/'>Quản lý log truy cập</Link></li>
                <li><Link to='/'>Quản lý dịch vụ truy cập</Link></li>
                <li><Link to='/'>Quản bá cảnh báo</Link></li>
                <li><Link to='/'>Phát hiện tấn công</Link></li>
                <li><Link to='/'>Tìm kiếm thông tin</Link></li>    
            </ul>
        </div>
    </Navbar>
)
export default Header;