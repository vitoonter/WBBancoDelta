import React, { Component } from 'react';
import Header from '../container/Header';
import Label from '../../atoms/Label';
import BoxHeader from '../../organisms/BoxHeader';

class Transference3 extends Component {

   render() {
    return (
      <div>
        <Header />
        <div className="external-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="box--title">
                  <Label text="TRANSFERENCIAS ENTRE CUENTAS PROPIAS"/>
                </div>
                <div className="box">
                  <BoxHeader
                    colors={["is-finished-step", "is-finished-step", "is-finished-step"]}
                    step="FIN"
                    text="TICKET"
                    className="box--header"
                  />
                  <div className="l-center transference--ticket">
                    Este es el ticket de su transferencia
                  </div>    
                  <div className="l-center transference--final-status">
                    La transferencia fue realizada con exito el día <b>10 de Setiembre del 2016 a las 09:23</b>.
                    La cuenta fue la <b>22345563-4</b> y la cuenta destino la <b>234566-67</b>, se 
                    transfirieron <b>USD 25</b> con una comisión de USD 1.75.  
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Transference3;
