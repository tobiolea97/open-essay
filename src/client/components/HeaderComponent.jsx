import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../data/Login";

export const HeaderComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.login)

    const onClickLogOut = () => {
        dispatch(logout());
        // go to login using windows.location
        // navigate(`/login`);
        window.location.href = '/login';
    };

    const onClickHome = () => {
        navigate(`/home`);
    }

    return (
        <>
            <header>
                <div className="header-wrapper">
                    <div className='logo'>
                        <a onClick={onClickHome}>
                            <img class="img-50" src='gpt-logo.png' alt='GPT-3' />
                        </a>
                        <h1>Open Essay</h1>
                    </div>
                    { auth.token &&
                        <div class="logout">
                            <p>Welcome, Tobias</p>
                            <a className='logout' onClick={onClickLogOut}>
                                <img className="img-30" src='logout-white.png' alt='GPT-3' />
                            </a>
                        </div>
                    }
                </div>
                { auth.token &&
                    <div class="profile-panel-sm">
                        <p>Welcome, Tobias</p>
                        <a className='logout' onClick={onClickLogOut}>
                            <img className="img-30" src='logout-white.png' alt='GPT-3' />
                        </a>
                    </div>
                }
            </header>
        </>
    )
}

export default HeaderComponent;