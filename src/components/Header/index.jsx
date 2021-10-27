

import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { Context } from '../../core/AppProvider';
import { popupLogin,lgout } from '../../redux/actions/authAction';


function Header() {
    let {linkLoading}=useContext(Context)
    let dispatch =useDispatch()
    let {user,login}= useSelector(state => state.auth)
    function openMenu(){
        document.body.classList.toggle('menu-is-show')
    }
    function over_play(){
        document.body.classList.remove('menu-is-show')
    }

    return (
        <>       <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={openMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <NavLink  onClick={linkLoading}  to="/" className="logo">
                    <img src="%PUBLIC_URL%/img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </NavLink>
                <div className="right">
                {
                    login ? (
                        <div className="have-login">
                        <div className="account">
                            <a href="#" className="info">
                                <div className="name">{user.name}</div>
                                <div className="avatar">
                                    <img src="./img/avt.png" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="hamberger">
                        </div>
                        <div className="sub">
                            <NavLink to="/thong-tin-ca-nhan/course">Khóa học của tôi</NavLink>
                            <NavLink to="/thong-tin-ca-nhan">Thông tin tài khoản</NavLink>
                            <a href="#" onClick={() => dispatch(lgout())}>Đăng xuất</a>
                        </div>
                    </div>
                    ) :(
                        <div class="not-login bg-none">
                                    <a href="#" class="btn-register" onClick={() => dispatch(popupLogin(true))}>Đăng nhập</a>
                                    <a href="login.html" class="btn main btn-open-login" >Đăng ký</a>
                                </div>
                    )
                }
                
                </div>
            </div>
        </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <NavLink to="/register">Đăng ký</NavLink>
                    </li>
                    <li >
                        <NavLink onClick={linkLoading} exact to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/courses">Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" onClick={over_play} /></>
    );
}

export default Header;