import React from "react";
import { useSelector } from "react-redux";

const StarWarsBanner = props => {
  const selected = useSelector(state => {
    if (state.StarWarsApp.selected !== null) {
      return state.StarWarsApp.films.find(item => {
        return item.episode_id === state.StarWarsApp.selected;
      });
    } else {
      return null;
    }
  });

  if(selected===null){
    return '';
  }else{
    return (
      <div className="StarWarsBanner">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">{selected.title}</h1>
            <p className="lead text-muted">
              {selected.opening_crawl}

            </p>
          </div>
        </section>
      </div>
    );
  }

};

export default StarWarsBanner;
