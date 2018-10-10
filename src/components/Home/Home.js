import React from 'react'
import './Card.css'
import Footer from './Footer'
import {Alert_Logo, ListAlert_Logo, DNS_Logo, Group_Logo, Agent_Logo, ArrowDown_Logo
    , Analyze_Logo, Sms_Logo, Statitic_Logo, Search_Logo, Transfer_Logo, User_Logo, Web_Logo, Email_Logo}
        from '../../icon/Icon'
const Card = () => (
    <div className="fullCard col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Quản lý người dùng</h1>
                <hr />
                <Items />
            </div>
        </div>
    </div>
)

const Card_Log = () => (
    <div className="fullCardLog col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Quản lý log truy cập</h1>
                <hr />
                <Items_Log />
            </div>
        </div>
    </div>
)

const Card_Service = () => (
    <div className="fullCard col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Quản lý dịch vụ truy cập</h1>
                <hr />
                <Items />
            </div>
        </div>
    </div>
)

const Card_Boardcast = () => (
    <div className="fullCard col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Quảng bá cảnh báo</h1>
                <hr />
                <Items />
            </div>
        </div>
    </div>
)

const Items_Log = () => (
    <div className="row cardRowLog">
        <div className="col-md-3">

            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>User</figcaption>
            </figure>


        </div>
        <div className="col-md-3">
            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Group</figcaption>
            </figure>
        </div>
        <div className="col-md-3">
            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Group</figcaption>
            </figure>
        </div>
        <div className="col-md-3">
            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Alert</figcaption>
            </figure>
        </div>
    </div>
)
const Items = () => (
    //<div className="container">
    <div className="row cardRow">
        <div className="col-md-4">

            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>User</figcaption>
            </figure>


        </div>
        <div className="col-md-4">
            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Group</figcaption>
            </figure>
        </div>
        <div className="col-md-4">
            <figure>
                <a href="#">
                    <img src="http://placehold.it/65x65" alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Alert</figcaption>
            </figure>
        </div>
    </div>
    //</div>
)


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////Phat hien tan cong///////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

const Items_Dectects = () => (
    //<div className="container">
    <div className="row cardRow">
        <div className="col-md-4">

            <figure>
                <a href="#">
                    <img src={Search_Logo} style={{width:60, height:60}} alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>User</figcaption>
            </figure>


        </div>
        <div className="col-md-4">
            <figure>
                <a href="#">
                    <img src={Group_Logo} style={{width:60, height:60}} alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Group</figcaption>
            </figure>
        </div>
        <div className="col-md-4">
            <figure>
                <a href="#">
                    <img src={Alert_Logo} style={{width:60, height:60}} alt="Image" />
                </a>
                <figcaption style={{ textAlign: "center" }}>Alert</figcaption>
            </figure>
        </div>
    </div>
    //</div>
)

const Card_Botnet = () => (
    <div className="fullCardDetection col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Botnet</h1>
                <hr />
                <Items_Dectects />
            </div>
        </div>
    </div>
)

const Card_WebServiceAtt = () => (
    <div className="fullCardDetection col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Web Service Attack</h1>
                <hr />
                <Items_Dectects />
            </div>
        </div>
    </div>
)
const Card_APT = () => (
    <div className="fullCardDetection col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>APT</h1>
                <hr />
                <Items_Dectects />
            </div>
        </div>
    </div>
)

const Card_AccessAtt = () => (
    <div className="fullCardDetection col-md-4" id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Access Attack</h1>
                <hr />
                <Items_Dectects />
            </div>
        </div>
    </div>
)
const Home = () => (
    <div>
        <h4>IT Operation</h4>
        <div className="container">
        <div className="row">
            <Card/>
            <Card_Log/>
            <Card_Service/>
            <Card_Boardcast/>
        </div>
        </div>
        
        <h4></h4>
        <h4 className="title">Phát hiện tấn công</h4>
        <div className="container">
        <div className="row justify-content-md-center">
            <Card_Botnet/>
            <Card_WebServiceAtt/>
            <Card_APT/>
            <Card_AccessAtt/>
        </div>
        </div>

        <Footer/>
    </div>
)


export default Home;
