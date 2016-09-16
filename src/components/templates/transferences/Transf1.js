import React, { Component } from 'react';
import HeaderComponent from '../../HeaderComponent'
import Footer from '../container/Footer'
import IconsHeaderComponent from '../../IconsHeaderComponent'

import ComboBox from '../../atoms/ComboBox'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'


import { Router, Route, Link, browserHistory } from 'react-router'

export default class Transf1 extends Component {

  handleTextImporte() {

  }

  handleTextReference() {

  }

  handleTextAccountDebito() {

  }

  handleTextAccountCredito() {

  }

  render() {
    return (
      <div>
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
                    <TitleLabel text="PASO 1 INGRESE LOS DATOS DE LA TRANSFERENCIA" />
                    <div className="center icons-box">
                      <IconsHeaderComponent color1="#00468b" color2="#a8a8a8" color3="#a8a8a8"/>
                    </div>
                  </div>
                  <div className="center transference-form">
                    <div className="form-group Transf-info">
                      <Label text="CUENTA DÉBITO"/>
                      <Combobox />
                    </div>
                    <div className="form-group">
                      <Label text="CUENTA CRÉDITO"/>
                      <Combobox />
                    </div>
                    <div className="form-group">
                      <Label text="IMPORTE"/>
                      <Input placeholder="ingrese un importe" />
                    </div>
                    <div className="form-group">
                      <Label text="REFERENCIA"/>
                      <Input placeholder="ingrese una referencia"/>
                    </div>
                    <NextButton link="transf2" class="btn-next-transf l-right"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
