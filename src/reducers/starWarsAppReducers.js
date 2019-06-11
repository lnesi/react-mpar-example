import * as types from '../actions/types';

const defaultState={
  loading:false,
  films:[],
  selected:null
}

export default function (state=defaultState,action){
  switch(action.type){
    case types.STAR_WARS_APP_FILMS_LOADING:
      return {...state,loading:true}
    case types.STAR_WARS_APP_FILMS_LOADED:
      const selected=state.selected===null?action.payload[0].episode_id:state.selected;
      return {...state,loading:false,films:action.payload,selected};
    case types.STAR_WARS_APP_FILMS_RESET:
      return {...state,loading:false,films:[],selected:null};
    case types.STAR_WARS_APP_FILMS_SELECT:
      return {...state,selected:action.payload};
    default :
      return state;
  }
}
