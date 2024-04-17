import React from 'react';

class BubbleSortCars extends React.Component {
  state = {
    cars: [
      {"merkki": "Toyota", "malli": "Corolla", "vuosimalli": 2018, "nopeus": 180},
      {"merkki": "Ford", "malli": "Focus", "vuosimalli": 2019, "nopeus": 170},
      {"merkki": "Honda", "malli": "Civic", "vuosimalli": 2017, "nopeus": 200},
      {"merkki": "BMW", "malli": "3-sarja", "vuosimalli": 2020, "nopeus": 220}
    ]
  };

  render() {
    const järjestetty = [...this.state.cars].sort((a, b) => a.nopeus - b.nopeus);
    return (
      <div>
        <h2>Autot järjestettynä nopeuden mukaan</h2>
        <ul>
          {järjestetty.map((car, index) => (
            <li key={index}>
              {car.merkki} {car.malli} ({car.vuosimalli}) - Nopeus: {car.nopeus} km/h
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BubbleSortCars;
