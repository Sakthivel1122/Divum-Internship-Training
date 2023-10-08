import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = ({numberOfCakes,buyCake}) => {
  return (
    <div className="CakeContainer">
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake 1</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
