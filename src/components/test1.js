import React from 'react';
import { hashHistory } from 'react-router';

export default function Test1() {
  return (
    <div>
      Hola test 1
      <button onClick={() => hashHistory.push('/test2')}>Go to /test2</button>
    </div>
  )
}