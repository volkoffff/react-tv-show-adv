import { SMALL_BACKDROP_BASE_URL } from "../config";

export function TVshowListItem({tvShow, onClick}) {

  return( 
    <div className="cardMovie" onClick={() => onClick(tvShow) }>
        <img src={SMALL_BACKDROP_BASE_URL + tvShow.backdrop_path}  alt="" />
        <div className="tittle">{tvShow.name}</div>
    </div>
  );
}
