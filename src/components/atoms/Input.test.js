import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe("Input tests", () => {
  it("props should be passed to input component", () => {
    const props = {
      id: 1,
      type: 'text',
      placeholder: 'prueba'
    };

    const wrapper = shallow(<Input {...props}/>);
    const input = wrapper.find('input').last();
    expect(input.prop('type')).toBe('text');
    expect(input.prop('id')).toBe(1);
    expect(input.prop('placeholder')).toBe('prueba');
  });
});
