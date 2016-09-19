import React from 'react';
import './base.css';
import './layout.css'
import './modules.css';
import './state.css';
import Footer from './components/templates/container/Footer';

const App = ({ children }) =>
    <div>
        { children }
        <Footer/>
    </div>

export default App;
