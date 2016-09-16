import React from 'react';
import './base.css';
import './layout.css'
import './modules.css';
import './state.css';
import Header from './components/templates/container/Header';
import Footer from './components/templates/container/Footer';

const App = ({ children }) => 
    <div>
        <Header />
        { children }
        <Footer />
    </div>

export default App;
