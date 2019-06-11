import axios from 'axios';
import * as types from './types';

export function loadFilms(){
  return async (dispatch)=>{
      dispatch({type:types.STAR_WARS_APP_FILMS_LOADING});
      const films=await axios.get("https://swapi.co/api/films");
      dispatch({type:types.STAR_WARS_APP_FILMS_LOADED,payload:films.data.results});
  }

}


export function resetList(){
  return {type:types.STAR_WARS_APP_FILMS_RESET}
}

export function selectFilm(episode_id){
  return {type:types.STAR_WARS_APP_FILMS_SELECT,payload:episode_id};
}
