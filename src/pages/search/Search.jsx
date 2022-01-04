import { useSearchParams } from "react-router-dom";
import { useFetch } from "./../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import "./Search.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;

  const { data, error, isPending } = useFetch(url, "GET");

  return (
    <div className="home">
      <h2 className="page-title">Recipes including {query}</h2>

      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading Search Results</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
