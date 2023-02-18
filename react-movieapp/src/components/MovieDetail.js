import PropTypes from "prop-types";

function MovieDetail({ coverImg, title, description_full, rating, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{description_full}</p>
      <p>{rating}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.protoTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
