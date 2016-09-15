import React from 'react';
import { hashHistory } from 'react-router';

export default function Test2() {
  return (
    <div>
      Hola test 2
      <button onClick={() => hashHistory.push('/')}>Go to /test1</button>
    </div>
  )
}