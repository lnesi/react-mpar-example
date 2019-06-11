import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
import StarWarsFilmsList from './StarWarsFilmsList';

const StarWarsApp = props => {
  const films = useSelector(state => state.StarWarsApp.films);
  const loading = useSelector(state => state.StarWarsApp.loading);
  const selected = useSelector(state => state.StarWarsApp.selected);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!loading && films.length === 0) {
        console.log("inside ", films);
        dispatch(actions.loadFilms());
      }
    },
    [films, dispatch, loading]
  );

  return (
    <div className="StarWarsApp">
      <h2>StarWars Films:</h2>
      {loading && (<div className="StarWarsApp__preloader">Loading</div>)}
      {!loading &&
        (
          <div>
            <StarWarsFilmsList films={films} selected={selected} dispatch={dispatch}/>
            <button onClick={()=>{
              dispatch(actions.resetList())
            }}>Re-Load</button>
          </div>
        )
      }
    </div>
  )
};

export default StarWarsApp;
