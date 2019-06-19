import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import styled from 'styled-components';
import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    return(
      <div>
      {this.props.fetching && 
        // return something here to indicate that you are fetching data
        (<Loader type="ThreeDots" color="coral" height={80} width={80} />)
      }
      {
        this.props.characters && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        )
      }
      {
        this.props.error && (
          <div>{this.props.error}</div>
        )
      }
      </div>
    )
    
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
