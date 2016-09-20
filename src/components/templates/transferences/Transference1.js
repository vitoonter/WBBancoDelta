import React, { Component } from 'react';
import ComboBox from '../../atoms/ComboBox';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import BoxHeader from '../../organisms/BoxHeader';


export default class Transference1 extends Component {

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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="box--title">
              <Label text="TRANSFERENCIAS ENTRE CUENTAS PROPIAS"/>
            </div>
            <div className="box">
              <BoxHeader
                colors={["is-current-step", "is-future-step", "is-future-step"]}
                step="PASO 1"
                text="INGRESE LOS DATOS DE LA TRANSFERENCIA"
                className="box--header"
              />
              <div className="l-center transference--form">
                <div className="form-group transference--info">
                  <Label text="CUENTA DÉBITO"/>
                  <ComboBox />
                </div>
                <div className="form-group">
                  <Label text="CUENTA CRÉDITO"/>
                  <ComboBox />
                </div>
                <div className="form-group">
                  <Label text="IMPORTE"/>
                  <Input placeholder="ingrese un importe" />
                </div>
                <div className="form-group">
                  <Label text="REFERENCIA"/>
                  <Input placeholder="ingrese una referencia"/>
                </div>
                <Button link="transference2" className="transference--next-button l-right" text="SIGUIENTE"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
