
import React, { useEffect, useState } from 'react'
import Banner from './conponents/banner';
import Different from './conponents/different';
import Testimonial from './conponents/testimonial'
import Gallery from './conponents/gallery';
import Action1 from './conponents/action';
import CourseOnline_list from '../../components/courseOnline_list'
import courseApi from "../../api/courseApi";
import UseStateSecssion from '../../core/useStateSecsion'
function Home() {
    let [state,setState]=UseStateSecssion({
        gallery:[],
        online:[],
        offline:[],
        review:[],
        api: true,
        loading:true
    },'home')
    useEffect( async()=>{
        if (state.api) {
            let res = await courseApi.home()
            setState({
                ...res,
                loading: false,
                api: false
            })
        }
    })
    if(state.loading){
        return 'Loading..........'
    }
    return (
            <div>


                <main className="homepage" id="main">
                    <Banner />
  
                    <CourseOnline_list online={state.online} offline={state.offline} />
                    <Different />

 
                    <Testimonial review={state.review} />
                    <Gallery gallery={state.gallery} />

                    <Action1 />
                </main>

                {/* popup video homepage */}
                <div className="popup-video" style={{ display: 'none' }}>
                    <div className="wrap">
                        <div className="video-src" />
                    </div>
                    <div className="close" />
                </div>
                <div className="popup-form popup-login" style={{ display: 'none' }}>
                    <div className="wrap">
                        {/* login-form */}
                        <div className="ct_login" style={{ display: 'block' }}>
                            <h2 className="title">Đăng nhập</h2>
                            <input type="text" placeholder="Email / Số điện thoại" />
                            <input type="password" placeholder="Mật khẩu" />
                            <div className="remember">
                                <label className="btn-remember">
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <p>Nhớ mật khẩu</p>
                                </label>
                                <a href="#" className="forget">Quên mật khẩu?</a>
                            </div>
                            <div className="btn rect main btn-login">đăng nhập</div>
                            <div className="text-register" style={{}}>
                                <strong>hoặc đăng ký bằng</strong>
                            </div>
                            <div>
                                <div className="btn btn-icon rect white btn-google">
                                    <img src="img/google.svg" alt="" />
              Google
            </div>
                            </div>
                            <div className="close">
                                <img src="img/close-icon.png" alt="" />
                            </div>
                        </div>
                        {/* email form */}
                        <div className="ct_email">
                            <h2 className="title">Đặt lại mật khẩu</h2>
                            <input type="text" placeholder="Email" />
                            <div className="btn rect main btn-next">Tiếp theo</div>
                            <div className="back" />
                            <div className="close">
                                <img src="img/close-icon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup-form popup-login" style={{ display: 'none' }}>
                    <div className="wrap">
                        <h2 className="title">Đăng ký</h2>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
          Google
        </div>
                        <p className="policy">
                            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
        </p>
                        <div className="close">
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Home;