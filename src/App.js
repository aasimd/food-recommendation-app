import "./styles.css";
import React, { useState } from "react";
var foodDB = {
  Starter: [
    { name: "Chicken Crispy", taste: "medium spicy" },
    { name: "malai kabab", taste: "sweet" }
  ],

  MainCourse: [
    { name: "butter chicken", taste: "medium spicy" },
    { name: "chicken tikka", taste: "spicy" }
  ],

  TandoorRotis: [
    { name: "butterNaan", taste: "sweet" },
    { name: "naan", taste: "normal" }
  ],

  Desert: [
    { name: "pastry", taste: "sweet" },
    { name: "gulaab jaamun", taste: "sweet" }
  ],
  ChineseRice: [
    { name: "Chilly rice", taste: "spicy" },
    { name: "Singapore rice", taste: "sweet" }
  ]
};

export default function App() {
  const [recommend, setRecommend] = useState("Desert");

  function clickHandler(meals) {
    setRecommend(meals);
  }

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>Are you looking for some food suggestions?</h2>
      <h4>here are my recommendations for you</h4>
      <hr />
      <hr />
      <div>
        {Object.keys(foodDB).map((meals) => {
          return (
            <li
              key={meals}
              style={{
                listStyle: "none",
                margin: "0.2rem",
                display: "inline-block",
                fontSize: "1.2rem"
              }}
            >
              <button
                style={{
                  cursor: "pointer"
                }}
                onClick={() => clickHandler(meals)}
              >
                {meals}
              </button>
            </li>
          );
        })}
      </div>
      <hr />
      <div
        style={{
          fontSize: "3rem",
          fontFamily: "sansSerif",
          fontStyle: "italic"
        }}
      >
        {recommend}
      </div>
      <div>
        {foodDB[recommend].map((meals) => {
          return (
            <ul>
              <li
                key={meals.name}
                style={{
                  listStyle: "none",
                  border: "1px black solid",
                  padding: "1rem",
                  backgroundColor: "#fecaca"
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem"
                  }}
                >
                  {meals.name}
                </div>
                <div>{meals.taste}</div>
              </li>
            </ul>
          );
        })}
      </div>
      <hr />
      <footer
        style={{
          textAlign: "center",
          position: "sticky",
          bottom: "0",
          height: "1rem"
        }}
      >
        <small>project by Aasim 2022 ©</small>
      </footer>
    </div>
  );
}
