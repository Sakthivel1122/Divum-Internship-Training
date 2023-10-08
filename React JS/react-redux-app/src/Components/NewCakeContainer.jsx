import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = ({numberOfCakes,buyCake}) => {
  const [cakeCount, setCakeCount] = useState(1);
  const handleOnChange = (e) => {
    const {value} = e.target;
    setCakeCount(value);
  }
  return (
    <div className="CakeContainer">
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <input type="text" value={cakeCount} onChange={handleOnChange}/>
      <button onClick={() => buyCake(cakeCount)}>Buy {cakeCount} Cake(s)</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
