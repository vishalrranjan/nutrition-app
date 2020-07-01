import React from "react";
import ReactDOM from "react-dom";
import calorieData from "./data/calorie-data";
import FoodList from "./food-list/food-list";

import "./styles.css";

// header complonent Start
function Header(props) {
  return <h1>{props.heading}</h1>;
}
// End of header component

class App extends React.Component {
  state = {
    totalcalorie: 0
    // searchWord: ""
  };
  onClickHandler = calories => {
    this.setState({ totalcalorie: calories + this.state.totalcalorie });
    this.setState({ searchWord: "" });
  };
  reset = () => {
    this.setState({ totalcalorie: 0 });
  };
  // searchHandler = e => {
  //   this.setState({ searchWord: e.target.value.toLowerCase() });
  // };

  render() {
    return (
      <div className="App">
        <Header heading={"List of food item"} />
        {/* <input
          type="search"
          placeholder="Type A Name Here....."
          onChange={this.searchHandler}
        /> */}
        <p>Click on Item to calculate calorie </p>
        <FoodList
          calorieData={calorieData}
          calorieHandle={this.onClickHandler}
          searchWords={this.searchWord}
        />
        <h2>Total Calories :{this.state.totalcalorie}</h2>
        <button onClick={this.reset}>Re-Calculate</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
