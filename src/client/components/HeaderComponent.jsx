import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useToken } from '../auth/useToken';

export const HeaderComponent = () => {
    const [token, setToken] = useToken();
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const onClickLogOut = () => {
        localStorage.removeItem('token');
        navigate(`/login`);
    };

    return (
        <>
            <header>
                <div className='header'>
                    <img src='gpt-logo.png' alt='GPT-3' />
                    <h1>Open Essay</h1>
                </div>
                { isLoggedIn &&
                    <a className='logout' onClick={onClickLogOut}>
                        <img className="logout" src='logout.png' alt='GPT-3' />
                    </a>
                }
            </header>
        </>
    )
}

export default HeaderComponent;