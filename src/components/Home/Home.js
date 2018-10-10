import React, {Component} from 'react'
import './Card.css'
import Footer from './Footer'
import {Items, Items_Log, Items_Dectects} from './Items'
import {
    Alert_Logo, ListAlert_Logo, DNS_Logo, Group_Logo, Agent_Logo, ArrowDown_Logo
    , Analyze_Logo, Sms_Logo, Statitic_Logo, Search_Logo, Transfer_Logo, User_Logo, Web_Logo, Email_Logo
} from '../../icon/Icon'
const Card = () => (
    <div className="fullCard col-md-4" style={{marginLeft:'45px'}} id="thumbnail">
        <div className="cardContent">
            <div className="cardText">
                <h1>Quản lý người dùng</h1>
                <hr />
                <Items firstImg={User_Logo} figure_1={'User'}
                        secondImg={Group_Logo} figure_2={'Group'}
                        thirdImg={Alert_Logo} figure_3={'Alert'}
                />
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
                <Items firstImg={Search_Logo} figure_1={'Tìm kiếm'}
                        secondImg={Web_Logo} figure_2={'Web Services'}
                        thirdImg={DNS_Logo} figure_3={'DNS Services'}
                        />
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
                <Items firstImg={ListAlert_Logo} figure_1={'DS Cảnh báo'}
                        secondImg={Email_Logo} figure_2={'Gửi qua Email'}
                        thirdImg={Sms_Logo} figure_3={'Gửi qua SMS'}
                        />
            </div>
        </div>
    </div>
)



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////Phat hien tan cong///////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


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

class Test extends Component {
    render(){
        return (
            <div>
                {this.props.x}
            </div>
        );
    }
}



const Home = () => (
    <div>
        
        <h4>IT Operation</h4>
        {//<div className="container" >
        }
        <div className="row" >

            <Card/>
            <Card_Log/>
            <Card_Service/>
            <Card_Boardcast/>
        </div>
        {//</div>
        }
        
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
