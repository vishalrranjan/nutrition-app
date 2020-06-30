import React from "react";
import "./food-list.css";

const FoodList = ({ calorieData, calorieHandle }) => {
  return calorieData.slice(0, 25).map(foodItem => (
    <div
      key={foodItem.name}
      className="align"
      onClick={() => calorieHandle(foodItem.calories)}
    >
      <table className="line">
        <tr>
          <td>{foodItem.name}</td>
          <td>{foodItem.measure}</td>
          <td>{foodItem.calories}</td>
        </tr>
      </table>
    </div>
  ));
};

export default FoodList;
