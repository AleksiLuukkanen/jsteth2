import React, { useState } from 'react';

const NumeroVaihto = () => {
  const [number, setNumber] = useState('');

  const VaihdaNumerot = () => {
    if (number.length % 2 === 0) {
      setNumber(number.split('').reduce((acc, digit, index) => {
        if (index % 2 === 0) {
          acc.push(digit);
        } else {
          acc[acc.length - 1] = digit;
        }
        return acc;
      }, []).join(''));
    }
  };

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={VaihdaNumerot}>Vaihda numeroja.</button>
    </div>
  );
};

export default NumeroVaihto;