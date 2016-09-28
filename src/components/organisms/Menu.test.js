import React from 'react';
import { shallow, mount} from 'enzyme';
import Menu from './Menu';

describe("Menu tests", () => {
  it("options should be passed to Menu component", () => {
    const options = {
      "consultas": [
        "posicion",
        "estado de cuenta"
      ],
      "transferencias": [
        "Entre Cuentas",
        "A terceros"
      ]
    };

    const wrapper = mount(<Menu isVisibleMenu={true} options={options}/>);
    expect(wrapper.find('.nav-section--header').length).toBe(2);
    expect(wrapper.find('.fa.fa-square.l-left').length).toBe(4);
  });
});
