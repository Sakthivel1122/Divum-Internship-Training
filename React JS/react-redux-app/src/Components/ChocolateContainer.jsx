import React from "react";
import { connect } from "react-redux";
import { buyChocolate } from "../redux";

const ChocolateContainer = ({numOfChocolates,buyChocolate}) => {
  return (
    <div className="CakeContainer">
      <h2>Number of Chocolate - {numOfChocolates}</h2>
      <button onClick={buyChocolate}>Buy Chocolate</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfChocolates: state.chocolate.numOfChocolates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyChocolate: () => dispatch(buyChocolate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);
