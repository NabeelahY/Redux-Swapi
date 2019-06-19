import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

const StyledLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const StyledCharList = styled.div`
  margin: auto;
  width: 80%;
  h3 {
    text-align: center;
    margin: 2rem 0;
    padding: 1rem;
  }
`;

const StyledError = styled.div`
  width: 40%;
  padding:2rem;
  text-align: center;
  font-size: 1.5rem;
  color: red;
  background-color: #ffa07a;
  margin: 2rem auto;
`;

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    return (
      <div>
        {this.props.fetching && (
          // return something here to indicate that you are fetching data
          <StyledLoader>
            <Loader type="ThreeDots" color="#F2D0A4" height={80} width={80} />
          </StyledLoader>
        )}
        {this.props.characters && (
          <StyledCharList className="CharactersList_wrapper">
            <h3>Meet the Star Wars Cast</h3>
            <CharacterList characters={this.props.characters} />
          </StyledCharList>
        )}
        {this.props.error && <StyledError>{this.props.error}</StyledError>}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters.results,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
});
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChars
  }
)(CharacterListView);
