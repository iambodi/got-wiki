import React from 'react';
import './character.css';
import Breadcrumb from '../../components/Breadcrumb';
import { Redirect } from 'react-router-dom';

function Character(props) {
  const character = props.location.state;

  function displayGender() {
    if (character.gender) {
      return <li>Gender: {character.gender}</li>;
    }
  }
  function displayCulture() {
    if (character.culture) {
      return <li>Culture: {character.culture}</li>;
    }
  }
  function displayBirth() {
    if (character.born) {
      return <li>Birth: {character.born}</li>;
    }
  }
  function displayDeath() {
    if (character.died) {
      return <li>Death: {character.died}</li>;
    }
  }
  function displayTitles() {
    if (character.titles.length !== 0) {
      let titles = '';
      character.titles.forEach((title) => {
        titles = character.titles.join(', ');
      });
      return <li>Title: {titles}</li>;
    }
  }
  function displayAliases() {
    if (character.aliases.length !== 0) {
      let aliases = '';
      character.aliases.forEach((alias) => {
        aliases = character.aliases.join(', ');
      });
      return <li>Also know as: {aliases}</li>;
    }
  }

  function displayMother() {
    if (character.mother) {
      return <li>Mother: {character.mother}</li>;
    }
  }
  function displayFather() {
    if (character.father) {
      return <li>Father: {character.father}</li>;
    }
  }
  function displayPlayedBy() {
    if (character.playedBy) {
      return <li>Played By : {character.playedBy}</li>;
    }
  }
  if (props.location.state) {
    return (
      <div>
        <Breadcrumb currentPage={`Character / ${character.name}`} />
        <div className="containerChar">
          <div className="display-linebreak">
            <h4 className="charName">{character.name}</h4>
            <ul className="characterDetails">
              {displayGender()}
              {displayCulture()}
              {displayBirth()}
              {displayDeath()}
              {displayTitles()}
              {displayAliases()}
              {displayMother()}
              {displayFather()}
              {displayPlayedBy()}
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Character;
