import React, { Component } from 'react'
import '../App.css'
import ServiceAccessChart from './ServiceAccessChart'
import './Log.css'
const LogManagement = () => (
    <div>
        <h4>Quản lý log truy cập theo thời gian thực</h4>
        <br/>
        <div class="container">
            <div class="row" style={{marginLeft:"220px"}}>
                <div class="col-md-3">
                    <label>Date:</label> &nbsp;&nbsp;
                    <input id="date" type="date" value="2018-10-10" />
                </div>
                <div class="col-md-3">
                    <label>Time Begin:</label> &nbsp;&nbsp; <input id="time_start" type="time" required />
                </div>
                <div class="col-md-3">
                    <label>Time End:</label> &nbsp;&nbsp; <input id="time_end" type="time" required />
                </div>
                
            </div>
            </div>
        <div className='chart'>
        <ServiceAccessChart/>
        </div>
        
    </div>
)

export default LogManagement;
