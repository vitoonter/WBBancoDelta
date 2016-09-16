import React from 'react';
import './base.css';
import './layout.css'
import './modules.css';
import Header from './components/templates/container/Header';
import Footer from './components/templates/container/Footer';
import LoginUser from './components/templates/login/LoginUser'
import LoginPassword from './components/templates/login/LoginPassword'

const App = ({ children }) => 
    <div>
    	{ children }
        <Header />
        <Footer />
    </div>

export default App;
