import React, { Component } from 'react';
import '../../../App.css';
import HeaderComponent from '../../HeaderComponent'
import Footer from '../container/Footer'
import IconsHeaderComponent from '../../IconsHeaderComponent'

import Label from '../../atoms/Label'
import TitleLabel from '../../atoms/TitleLabel'
import InstructionLabel from '../../atoms/InstructionLabel'

class Transf3 extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="external">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="paragraph2">
                TRANSFERENCIAS ENTRE CUENTAS PROPIAS
              </div>
              <div className="internal">
                <div className="App-header2">
                  <TitleLabel text="FIN TICKET" />
                  <div className="center icons-box">
                      <IconsHeaderComponent color1="#ca003f" color2="#ca003f" color3="#ca003f"/>
                  </div>
                </div>
                <br/><br/>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-3">
                      </div>
                      <div className="col-md-6">
                        <div className="paragraph3">
                          <Label text="Este es el ticket de su transferencia" />
                        </div>
                        <div className="paragraph">  
                          <InstructionLabel text ="La transferencia fue realizada con exito el día 10 de Setiembre del 2016 a las 09:23.
                          La cuenta fue la 22345563-4 y la cuenta destino la 234566-67, se transfirieron USD 25 con una
                          comisión de USD 1.75." />
                        </div>
                      </div>
                      <div className="col-md-3">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}
export default Transf3;
