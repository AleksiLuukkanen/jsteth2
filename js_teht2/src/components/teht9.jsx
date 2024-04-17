import React, { Component } from 'react';

class YmpyräTarkistus extends Component {
  state = { x: 0, y: 0, r: 5, a: 0, b: 0, inside: '?' };

  Tarkistus = (e) => {
    this.setState({ [e.target.name]: parseFloat(e.target.value) }, () => {
      const { x, y, r, a, b } = this.state;
      const inside = (x - a) ** 2 + (y - b) ** 2 < r * r ? 'Kyllä' : 'Ei';
      this.setState({ inside });
    });
  }

  render() {
    return (
      <div>
        <h2>Onko piste ympyrän sisällä?</h2>
        <input type="number" name="x" onChange={this.Tarkistus} placeholder="Ympyrän keskipiste X" />
        <input type="number" name="y" onChange={this.Tarkistus} placeholder="Ympyrän keskipiste Y" />
        <input type="number" name="r" onChange={this.Tarkistus} placeholder="Ympyrän säde" />
        <input type="number" name="a" onChange={this.Tarkistus} placeholder="Pisteen X" />
        <input type="number" name="b" onChange={this.Tarkistus} placeholder="Pisteen Y" />
        <p>Piste on ympyrän sisällä: {this.state.inside}</p>
      </div>
    );
  }
}

export default YmpyräTarkistus;
