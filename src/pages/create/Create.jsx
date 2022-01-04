import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Create.css";

import { useFetch } from "./../../hooks/useFetch";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      method,
      ingredients,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ingredient = newIngredient.trim();

    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevState) => [...prevState, ingredient]);
      setNewIngredient("");
      ingredientInput.current.focus();
    }
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <div className="create">
      <h2 className="page-title">Add a New recipe </h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
        <label>
          <span>Recipe method: </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time: </span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="button">Submit</button>
      </form>
    </div>
  );
}
