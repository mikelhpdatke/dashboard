import React, { Component } from 'react'
import './setting.css'
import '../App.css'
class Setting extends Component {
    render() {
        return (
            <div>
                <h4>Thiết lập</h4>
                <div id='formSubmitSetting'>
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationCustom03">IP Máy chủ</label>
                                <input type="text" className="form-control" id="validationCustom03" placeholder="0.0.0.0" required />
                                <div className="invalid-feedback">
                                    Please provide a valid IP.
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationCustom04">Thời gian cập nhật</label>
                                <input type="text" className="form-control" id="validationCustom04" placeholder="Đơn vị: Giây" required />
                                <div className="invalid-feedback">
                                    Please provide a valid input. For ex: 5
                            </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Setting;