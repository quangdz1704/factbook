import React from 'react'

function Album() {
    return (
        <div className="box" style={{ height: "30vw" }}>
            <div className="box-header with-border">
                <h3 className="box-title">Ảnh</h3>
                <a className="pull-right" style={{color: "#1877F2", fontSize: "normal", cursor: "pointer"}}>Xem tất cả</a>
            </div>
            <div className="box-body" >
                <div className="row" style={{ height: "100%" }} >
                    {/* <div className="col-xs-4">
                        <img src="" alt="Italian Trulli" />
                    </div> */}
                    <div className="col-xs-4" style={{ backgroundColor: "green", height: "30%", width: "30%" }}>col</div>
                    <div className="col-xs-4" style={{ backgroundColor: "blue", height: "30%", width: "30%" }}>col</div>
                    <div className="col-xs-4" style={{ backgroundColor: "red", height: "30%", width: "30%" }}>col</div>
                    <div className="w-100"></div>
                    <div className="col-xs-4" style={{ backgroundColor: "blue", height: "30%", width: "30%" }}>col</div>
                    <div className="col-xs-4" style={{ backgroundColor: "red", height: "30%", width: "30%" }}>col</div>
                    <div className="col-xs-4" style={{ backgroundColor: "green", height: "30%", width: "30%" }}>col</div>
                    <div className="w-100"></div>
                    <div className="col-xs-4" style={{ backgroundColor: "green", height: "30%", width: "30%" }}>col</div>
                    <div className="col-xs-4" style={{ backgroundColor: "blue", height: "30%", width: "30%" }}>col</div>
                    <div className="col-xs-4" style={{ backgroundColor: "red", height: "30%", width: "30%" }}>col</div>
                </div>
            </div>
        </div>


    )
}

export default Album
