import React from 'react';
import './base.css';
import './layout.css'
import './modules.css';
import Header from './components/templates/container/Header';
import Footer from './components/templates/container/Footer';

const App = ({ children }) => 
    <div>
    	{ children }
        <Header />
        <Footer />
    </div>

export default App;
