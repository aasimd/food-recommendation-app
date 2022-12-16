import "./styles.css";
import React, { useState } from "react";
import background from "/src/images/foodbackground.jpg";
var foodDB = {
  Starter: [
    {
      name: "Chicken Crispy / Korean fried chicken",
      taste: "medium spicy",
      description:
        "Korean fried chicken, usually called chikin in Korea, refers to a variety of fried chicken dishes created in South Korea, including the basic huraideu-chicken and spicy yangnyeom chicken. In South Korea, fried chicken is consumed as a meal, an appetizer, anju, or as an after-meal snack"
    },
    {
      name: "Malai Kebab",
      taste: "sweet",
      description:
        " This dish of the Mughlai Cuisine is prepared with boneless chicken pieces which is marinated in a melange of spices and then grilled. Chicken Malai Kebab is an appetizer that you can enjoy with your family and friends on occasions like kitty party, game night, pot luck and even anniversary."
    }
  ],

  MainCourse: [
    {
      name: "Butter Chicken",
      taste: "medium spicy",
      description:
        "Butter chicken, traditionally known as murgh makhani, is an Indian dish originating in New Delhi. It is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce. Its sauce is known for its rich texture. It is similar to chicken tikka masala, which uses a tomato paste"
    },
    {
      name: "Chicken Nargisi Kofta",
      taste: "spicy",
      description:
        "While the Nargisi Kofta may have some disputed origins, it has become part of a Mughlai chef’s arsenal in India. This dish is made by coating boiled eggs with compacted minced meat and served in a bowl of rich and creamy authentic Mughlai gravy. The Nargisi Kofta is a traditional Mughlai food that is usually consumed on festive occasions."
    }
  ],

  Breads: [
    {
      name: "Naan",
      taste: "mild and slightly nutty flavor of a classic plain flatbread",
      description:
        "Naan (romanized: nān, Urdu: نان, Hindi: नान) is a leavened, oven-baked or tawa-fried flatbread which is found in the cuisines mainly of Western Asia, Central Asia, Indian subcontinent.The Persian word nān 'bread' is attested in Middle Persian as n'n 'bread, food'."
    },
    {
      name: "Tandoor Rotis",
      taste: "normal",
      description:
        "Tandoor bread refers to a bread baked in a clay oven called a tandoor. Roti is an unleavened flatbread made of whole wheat flour. It is light and has no filling and is served with veggies, pulses, or meat preparations."
    }
  ],

  Desert: [
    {
      name: "Pastry",
      taste: "sweet",
      description:
        " A pastry is a small cake made with sweet pastry. In simple words it's a piece of cake."
    },
    {
      name: "Gulaab Jaamun",
      taste: "sweet",
      description:
        "Gulab jamun (also spelled gulaab jamun; lit. 'Rose water berry' or 'Rose berry') is a sweet confectionary or dessert, originating in the Indian subcontinent and a type of mithai."
    }
  ],
  ChineseRice: [
    {
      name: "Fried rice",
      taste: "sweet/spicy",
      description:
        "Chinese fried rice is a family of fried rice dishes popular in Greater China and around the world. It is sometimes served as the penultimate dish in Chinese banquets, just before dessert."
    },
    {
      name: "Singapore Fried rice",
      taste: "sweet",
      description:
        "Singapore Fried Rice is a Fusion Chinese rice dish popular in the Chinese takeaways and fast food places in many Countries. It is flavor- packed, delicious and is great to make when you are simply bored with your regular Classic Fried Rice. This Singapore fried rice can be made to a vegetarian, vegan or meat-based meal depending on your choice."
    }
  ]
};

export default function App() {
  const [recommend, setRecommend] = useState("Desert");

  function clickHandler(meals) {
    setRecommend(meals);
  }

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <nav
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,1)",
          backgroundBlendMode: "multiply"
        }}
      >
        <h1
          className="heading1"
          style={{ marginTop: "0%", paddingTop: "40px" }}
        >
          Hello!
        </h1>
        <h4 style={{ padding: "1rem" }}>
          Are you looking for some food suggestions? here are my recommendations
          for you
        </h4>
      </nav>
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundColor: "rgba(250,0,0,0.75)",
          backgroundBlendMode: "multiply"
        }}
      >
        <div style={{ margin: "1rem" }}>
          {Object.keys(foodDB).map((meals) => {
            return (
              <ul
                style={{ display: "inline-block", paddingBlockEnd: "0.5rem" }}
              >
                <li
                  key={meals}
                  style={{
                    listStyle: "none",
                    margin: "0.1rem"
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
              </ul>
            );
          })}
        </div>

        <div
          style={{
            fontSize: "3rem",
            fontFamily: "sans",
            fontStyle: "italic",
            fontSize: "2.8rem",
            fontWeight: "bolder",
            color: "honeydew",
            textDecoration: "underline 1.5px",
            margin: "1.5rem 0 0 0",
            width: "75%",
            margin: "auto",
            borderRadius: "1rem",
            backgroundColor: "rgba(0,0,0,0.4)"
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
                    width: "65%",
                    margin: "auto",
                    backgroundColor: "black",
                    padding: "1.5rem"
                  }}
                >
                  <div
                    className="dishName"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bolder",
                      color: "#ff5851"
                    }}
                  >
                    {meals.name}
                  </div>
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#fca3a0",
                      padding: "0.2rem 0 1rem 0"
                    }}
                  >
                    {meals.taste}
                  </div>
                  <div>{meals.description}</div>
                </li>
              </ul>
            );
          })}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          position: "sticky",
          bottom: "0",
          height: "1rem",
          color: "white",
          backgroundColor: "black",
          backgroundImage: `url(${background})`,
          backgroundBlendMode: "multiply"
        }}
      >
        <small>project by Aasim © 2022</small>
      </footer>
    </div>
  );
}
