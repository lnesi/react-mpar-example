import React from "react";
import * as actions from "../actions";

const StarWarsFilmsList = props => {
  return (
    <div className="StarWarsFilmsList">
      <ul className="list-group">
        {props.films.map(item => {
          return (
            <li
              onClick={() => {
                props.dispatch(actions.selectFilm(item.episode_id));
              }}
              key={item.episode_id}
              className={props.selected===item.episode_id?"list-group-item active":"list-group-item" }
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default StarWarsFilmsList;
