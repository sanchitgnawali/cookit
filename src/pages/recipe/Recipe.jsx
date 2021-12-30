import "./Recipe.css";
import { useFetch } from "./../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data, isPending, error } = useFetch(url);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading....</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} </p>
          <ul>
            {data.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
