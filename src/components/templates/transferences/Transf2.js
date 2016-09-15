import React, { Component } from 'react';
import HeaderComponent from '../../HeaderComponent'
import Footer from '../container/Footer'
import IconsHeaderComponent from '../../IconsHeaderComponent'

import ComboBox from '../../atoms/ComboBox'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

import { Router, Route, Link, browserHistory } from 'react-router'

class Transf2 extends Component {
  render() {
    return (
      <div >
        <HeaderComponent />
        <div className="external">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="paragraph2">
                 <Label text="TRANSFERENCIAS ENTRE CUENTAS PROPIAS"/>
              </div>
              <div className="internal">
                <div className="App-header2">
                  <TitleLabel text="PASO 2 INGRESE EL CODIGO TOKEN" />
                  <div className="center icons-box">
                    <IconsHeaderComponent color1="#ca003f" color2="#00468b" color3="#a8a8a8"/>
                  </div>
                </div>
                <br/>
                <div className="center transference-form">
                  <form>
                    <div className="form-group">
                      <div className="paragraph">            
                        <InstructionLabel text =" Genera un código mediante el dispositivo,
                        luego ingresalo en la casilla que se muestra más abajo:" />
                      </div>
                    </div>
                    <div className="form-group">
                      <Label text="CODIGO TOKEN:"/>
                      <Input placeholder="ingrese el código" />
                      <br/>
                      <div className="buttons">
                        <ReturnButton link="transf1" class="btn-prev-transf" />
                        <NextButton link="transf3" class="btn-next-transf l-right"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        </div>
      </div>
    );
  }
}
export default Transf2;