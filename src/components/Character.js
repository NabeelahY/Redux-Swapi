import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledChar = styled.li `
  width: 10rem;
  padding: 2rem;
  background-color: #F2D0A4;
  margin: 0.5rem;
  text-align: center;
  color: #fff;
`

const Character = props => {
  return <StyledChar>{props.character.name}</StyledChar>;
};

export default Character;

Character.propTypes = {
  character: PropTypes.object.isRequired
}
