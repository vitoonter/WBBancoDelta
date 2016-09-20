import React from 'react';
import '../styles/base.css';
import '../styles/layout.css'
import '../styles/modules.css';
import '../styles/state.css';
import Footer from '../components/templates/container/Footer';

const App = ({ children }) =>
    <div>
        { children }
        <Footer/>
    </div>

export default App;
