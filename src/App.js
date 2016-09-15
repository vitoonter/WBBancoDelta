import React from 'react';
import './base.css';
import './modules.css';
import Footer from './components/templates/container/Footer';

const App = ({ children }) => 
    <div>
    	{ children }
        <Footer></Footer>
    </div>

export default App;
