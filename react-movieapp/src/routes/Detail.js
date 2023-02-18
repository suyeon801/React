import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useCallback } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            description_full={movie.description_full}
            rating={movie.rating}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
