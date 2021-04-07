import React from 'react';
import { DialogModal, DatePicker, SelectBox } from '../../../common-components'

function Register() {
    return (
        <DialogModal
            size='25' modalID="register-modal"
            formID="form-view-asset"
            title="Đăng ký tài khoản"
            hasSaveButton={false}
            hasCloseButton={false}
            hasNote={false}
        >
            <div className="qlcv" style={{ textAlign: "center" }} >
                {/* Tên công việc */}
                {/* <div className={`form-group ${errorOnName === undefined ? "" : "has-error"}`}> */}
                <div className="form-inline">
                    <div className="form-group">
                        {/* <label>Họ<span className="text-red">*</span></label> */}
                        <input type="text" className="form-control" placeholder="Họ" />
                        {/* <ErrorLabel
                        content={errorOnName}
                    /> */}
                    </div>
                    {/* <div className={`form-group ${errorOnPass === undefined ? "" : "has-error"}`}> */}
                    <div className="form-group">
                        {/* <label>Tên<span className="text-red">*</span></label> */}
                        <input type="text" className="form-control" placeholder="Tên" />
                        {/* <ErrorLabel
                        content={errorOnPass}
                    /> */}
                    </div>
                </div>
                <div className="form-inline">
                    <input type="text" className="form-control" placeholder="Số di động hoặc email" />
                    <input type="text" className="form-control" placeholder="Mật khẩu mới" />
                </div>
                {/* <div className="form-inline">
                    <input type="text" className="form-control" placeholder="Mật khẩu mới" />
                </div> */}
                <div className="form-inline">
                    <DatePicker
                        id="end-date"
                        dateFormat="month-year"
                        value={""}
                        // onChange={this.handleChangeEndDate}
                        disabled={false}
                    />
                    <SelectBox
                        id="selectGender"
                        className="form-control select"
                        style={{ width: "100%" }}
                        items={[
                            { value: '', text: 'Giới tính' },
                            { value: 0, text: "Nam" },
                            { value: 1, text: "Nữ" },
                            { value: 2, text: "Khác" },
                        ]}
                    />
                </div>
                <p style={{ width: "72%", fontSize: 12, marginLeft: "14%" }}>
                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi.
                    Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                </p>
                <div className="form-inline">
                    <button className="btn btn-success" style={{ width: 200 }}>Đăng ký</button>
                </div>


            </div>
        </DialogModal>
    )
}

export default Register
