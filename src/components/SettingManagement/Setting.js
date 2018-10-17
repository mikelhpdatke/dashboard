import React, { Component } from 'react'
import './setting.css'
import '../App.css'
class Setting extends Component {
    render() {
        return (
            <div>
                <h4>Thiết lập</h4>
                <div id='formSubmitSetting'>
                    <form>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-5 col-form-label">IP Máy chủ</label>
                            <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="192.168.0.2" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-5 col-form-label">Khoảng thời gian nhận dữ liệu</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="inputPassword" placeholder="5" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Setting;