import React, { useState } from 'react';

function OikeanpuolimmainenNumero() {
  const [numbers, setNumbers] = useState('');

  const EtsiOikeanpuolimmainenNumero = () => {
    const nums = numbers.split(',').map(n => parseInt(n, 10));
    return nums.lastIndexOf(nums.find(n => n % 10 === 0)) || 0;
  };

  const NumeroEtsitty = (event) => {
    setNumbers(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={NumeroEtsitty} placeholder="Syötä numeroita pilkulla erotettuina." />
      <p>Oikeanpuolimmaisen pyöristetyn luvun sijainti on: {EtsiOikeanpuolimmainenNumero()}</p>
    </div>
  );
}
export default OikeanpuolimmainenNumero;