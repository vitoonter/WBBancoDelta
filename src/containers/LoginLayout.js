import React from 'react';
import Footer from '../components/templates/container/Footer';

const LoginLayout = ({ children }) =>
    <div>
        { children }
        <Footer/>
    </div>

export default LoginLayout;
