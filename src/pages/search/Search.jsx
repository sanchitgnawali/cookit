import { useSearchParams } from "react-router-dom";
import { useFetch } from "./../../hooks/useFetch";

import "./Search.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;

  const { data, error, isPending } = useFetch(url, "GET");

  return (
    <div>
      <h2 className="page-title">Recipes including {query}</h2>
    </div>
  );
}
