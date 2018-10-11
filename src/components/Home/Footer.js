import React from 'react'
import '../App.css'

const Footer = () => (
    <div>
    <hr/>
    
    <div className="container">
        <div className="row">
            <div className="col-md-4" >
            HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            <br/>
            Trụ sở chính:
            122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.
            <br/>
            Cơ sở đào tạo tại Hà Nội:
            Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội.
            </div>

            <div className="col-4">
            Học viện cơ sở tại TP.Hồ Chí Minh
            <br/>
            11 Nguyễn Đình Chiểu, P.Đa Kao, Q.1 TP Hồ Chí Minh
            <br/><br/>
            Cơ sở đào tạo tại TP.Hồ Chí Minh:
            <br/>
            Đường Man Thiện, P.Thiện Phú, Q.9 TP Hồ Chí Minh
            </div>
            <div className="col" style={{ marginLeft: '100px' }}>
            <ul>
                <li>Quản lý người dùng</li>
                <li>Quản lý log truy cập</li>
                <li>Quản lý dịch vụ truy cập</li>
                <li>Quảng bá cảnh báo</li>
                <li>Phát hiện tấn công</li>
                <li>Tìm kiếm thông tin</li>
            </ul>
            </div>
        </div>
    </div>
    </div>
)

export default Footer;