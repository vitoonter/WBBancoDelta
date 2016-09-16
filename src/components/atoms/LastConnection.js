import React, { Component } from 'react';

class LastConnection extends Component{
  render() {
    let today = new Date();    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    let text_last_connection = today.toLocaleDateString('es-ES', options) ;
    
    return (
      <div className="last-connection">
        Ultima conexión: <br/> {text_last_connection}
      </div>
    );
  }
}

export default LastConnection;