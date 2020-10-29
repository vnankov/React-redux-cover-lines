import React from 'react'

class FormFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "pricePerLine": "1.00",
      "totalRotations": 1,
      "calculatedPrice": "0.00"
    };

    this.updateData = this.updateData.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.selectedLines !== this.props.selectedLines) {
      let calculation = this.calculatePrice(
        this.state.pricePerLine,
        this.state.totalRotations,
        this.props.selectedLines
      );

      this.setState({calculatedPrice: calculation})
    }
  }

  updateData(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    let calculateFieldPrice = inputName === "pricePerLine" ? inputValue : this.state.pricePerLine;
    let calculatedFieldRotations = inputName === "totalRotations" ? inputValue : this.state.totalRotations;
    let calculation = this.calculatePrice(calculateFieldPrice, calculatedFieldRotations, this.props.selectedLines);

      this.setState({
        [inputName]:
          inputName === "pricePerLine" ?
          parseFloat(inputValue).toFixed(2) :
          inputValue,
        calculatedPrice: calculation
      });
  }

  calculatePrice(pricePerLine, rotations, linesCount) {
    let calculation =
      parseFloat(pricePerLine).toFixed(2) *
      parseInt(rotations) *
      linesCount;

    return parseFloat(calculation).toFixed(2);
  }

  render() {
    return (
      <form className="form-field">
        <label htmlFor="pricePerLine">
          Price per line
          <input
            id="pricePerLine"
            name="pricePerLine"
            value={this.state.pricePerLine}
            type="number"
            step="0.20"
            min="0.20"
            onChange={this.updateData}
          />
        </label>
        <label htmlFor="totalRotations">
          Total rotations
          <input
            id="totalRotations"
            name="totalRotations"
            value={this.state.totalRotations}
            type="number"
            min="1"
            onChange={this.updateData}
          />
        </label>
        <label htmlFor="calculatedPrice">
          Calculated price
          <input
            id="calculatedPrice"
            name="calculatedPrice"
            value={this.state.calculatedPrice}
            type="number"
            disabled
          />
        </label>
      </form>
    )
  }
}

export default FormFields;