import { FiveStarsRating } from "../FiveStarsRating/FiveStarsRating";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <>
      <div className="tv-show-detail">
        <h2>{tvShow.original_name}</h2>
        <div className="rating-align">
            <FiveStarsRating rating={rating} /> 
          <div>{tvShow.vote_average / 2}</div>
        </div>
        <p>{tvShow.overview}</p>
        <div className="jc gap10">
          <button className="btn btn-surface">Bande Annonce</button>
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </>
  );
}
