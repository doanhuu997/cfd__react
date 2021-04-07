import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useFormValiDate from '../../core/useFormValiDate';
import { popupLogin,login1, fetchLogin } from '../../redux/actions/authAction';

export default React.forwardRef(function Login( ) {

    let {popupOpen,loginError}=useSelector(state => state.auth)


    let dispatch= useDispatch()


    let { form, error, inputChang, check } = useFormValiDate({
        username: '',
        password: ''
    },
        {
            rule: {
                username: {
                    required: true,
                    pattern:'email'
                },
                password: {
                    required: true,
                    pattern: 'password'
                }
            }
        })
    async function _btnlogin() {
        let error = check();

        if (Object.keys(error).length === 0) {
            // let res = await userApi.login(form)
            // if (res.error) {
            //     setFormError(res.error)
            // } else {
            //     dispatch(login1(res.data))
            //     dispatch(popupLogin(false)) 
  
            // }
            dispatch(fetchLogin(form))


        }
    }

    return (
        <div className="popup-form popup-login" id="popupLogin"  style={{ display: popupOpen ? 'flex' : 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    {
                        loginError && <p className="error-text" style={{ textAlign: 'center', marginBottom: 20 }}>{loginError}</p>
                    }
                    <label>
                        <input name="username" onChange={inputChang} value={form.username} type="text" placeholder="Email / Số điện thoại" />
                        {error.username ? <p className="error_form"> {error.username} </p> : null}
                    </label>
                   <label>
                   <input name="password" onChange={inputChang} value={form.password} type="password" placeholder="Mật khẩu" />
                    {error.password ? <p className="error_form"> {error.password} </p> : null}
                   </label>
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={_btnlogin}>đăng nhập</div>
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
                    <div className="close" >
                        <img src="img/close-icon.png" alt="" onClick={ () => dispatch(popupLogin(false)) } />
                    </div>
                </div>
            </div>
        </div>
    );
})