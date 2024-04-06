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

    return (
        <>
            <header>
                <div className='header'>
                    <img src='gpt-logo.png' alt='GPT-3' />
                    <h1>Open Essay</h1>
                </div>
                { auth.token &&
                    <a className='logout' onClick={onClickLogOut}>
                        <img className="logout" src='logout.png' alt='GPT-3' />
                    </a>
                }
            </header>
        </>
    )
}

export default HeaderComponent;