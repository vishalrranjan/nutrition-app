import React from "react";
import "./food-list.css";

const FoodList = ({ calorieData, calorieHandle }) => {
  return (
    <div className="table-data">
      <table className="line">
        <tbody>
          {calorieData.map(foodItem => (
            <tr
              key={foodItem.name}
              className="align"
              onClick={() => calorieHandle(foodItem.calories)}
            >
              <td>{foodItem.name}</td>
              <td>{foodItem.measure}</td>
              <td>{foodItem.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodList;
