import { TVshowListItem } from "../TVShowListItem/TVShowListItem";

export function TvShowList({TvShowList, onClickItem}) {
  return (
    <>
      <h3>Films recommandé</h3>
      <div className="flex-scroll">
        {TvShowList.map((tvShow) => {
          return <TVshowListItem key={tvShow.id} tvShow={tvShow} onClick={onClickItem} />;
        })}
      </div>
    </>
  );
}
