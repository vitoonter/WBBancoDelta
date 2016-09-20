import React, { Component } from 'react';
import ComboBox from '../../atoms/ComboBox'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Header from '../container/Header';
import BoxHeader from '../../organisms/BoxHeader';

const Transference2 = ()=>(
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
                    colors={["is-finished-step", "is-current-step", "is-future-step"]}
                    step="PASO 2"
                    text="INGRESE EL CÓDIGO TOKEN"
                    className="box--header"
                  />
                <div className="l-center transference--form">
                  <form>
                    <div className="form-group">
                      <div className="message">            
                        <Label text ="Genera un código mediante el dispositivo,
                        luego ingresalo en la casilla que se muestra más abajo:" />
                      </div>
                    </div>
                    <div className="form-group">
                      <Label text="CÓDIGO TOKEN:"/>
                      <Input placeholder="ingrese el código" />
                      <br/>
                      <div className="buttons">
                        <Button link="transference1" className="transference--previous-button" text="VOLVER"/>
                        <Button link="transference3" className="transference--next-button l-right" text="SIGUIENTE" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>  
        </div>
      </div>
      )
export default Transference2
   
