import React from "react";

import Character from "./Character";

import styled from "styled-components";

const StyledCharList = styled.ul `
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const CharacterList = props => {
  return (
    <StyledCharList>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </StyledCharList>
  );
};

export default CharacterList;
