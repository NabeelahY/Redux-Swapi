import React from "react";

import Character from "./Character";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledCharList = styled.ul `
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const CharacterList = props => {
  console.log(props)
  return (
    <StyledCharList>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </StyledCharList>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
}
