import React from 'react'
import './general.css'
import { connect, useSelector } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

function Album() {

    const {posts} = useSelector(state => state.post)
     const { user } = useSelector(state => state.auth)
    const listPost = posts.filter(post => post.creator._id === user._id);
    let listImages = []
    listPost.forEach(post => {
        const images = post.images;
        listImages = [...listImages, images];
    })
    return (
        <div className="box" style={{ height: "fit-content" }}>
            <div className="box-header with-border">
                <h3 className="box-title">Ảnh</h3>
                <a className="pull-right" style={{ color: "#1877F2", fontSize: "normal", cursor: "pointer" }}>Xem tất cả</a>
            </div>
            <div className="box-body" >
                <div style={{  display: "flex" ,flexWrap: "wrap"}}>
                    {
                        listImages.length ?
                            listImages.map((image) => 
                            <div className="col-xs-4">
                                <img src={`${process.env.REACT_APP_SERVER}${image}`} alt="" className="album" />
                            </div>
                        ) : <div>Không có ảnh</div>
                    }

                </div>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, null)(withTranslate(Album))
