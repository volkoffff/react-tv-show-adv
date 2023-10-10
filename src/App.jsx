import React, { useEffect, useState } from "react";
import "./global.css";
import { TvShowApi } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { SMALL_BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./TVShowDetail/TVShowDetail";
import logo from "../src/assets/images/Pink-movies-logo.webp";
import { Logo } from "./Logo/Logo";
import { TVshowListItem } from "../src/TVShowListItem/TVShowListItem";
import { TvShowList } from "./TvShowList/TvShowList";
import { SearchBar } from "./SearchBar/SearchBAr";

export function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationsList, setReccomendations] = useState([]);

  async function fetchPopulars() {
    const populars = await TvShowApi.fetchPopularTvShows();
    if (populars.length > 0) {
      setCurrentTvShow(populars[3]);
    }
  }
  async function fetchRecommendations(tvShowId) {
    const recommendations = await TvShowApi.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
      setReccomendations(recommendations.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  async function searchTVShow(tvShowName) {
    const searchResponse = await TvShowApi.fetchByTitle(tvShowName);
    if (searchResponse.length > 0) {
      setCurrentTvShow(searchResponse[0]);
    }
  }

  function setCurrentTvShowFromRecommendantion(tvShow) {
    alert(JSON.stringify(tvShow));
  }

  console.log(recommendationsList);

  return (
    <div
      className="main-container"
      style={{
        background: currentTvShow
          ? `linear-gradient(0deg, rgba(0,0,0,1) 5%,  rgba(0,0,0,0) 100%), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="header">
        <div className="logo">
          <Logo imglogo={logo} />{" "}
        </div>
        <div className="search">
          <SearchBar onSubmit={searchTVShow} />
        </div>
      </div>
      <div className="second-container">
        {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
        <div className="recommentations">
          {recommendationsList && recommendationsList.length > 0 && (
            <TvShowList TvShowList={recommendationsList} onClickItem={setCurrentTvShow} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
