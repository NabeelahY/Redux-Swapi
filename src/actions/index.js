// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const FETCH_LOAD = "FETCH_LOAD";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getChars = () => dispatch => {
  dispatch({ type: FETCH_LOAD });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      //   console.log(res);
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data: res.data.results
        }
      });
    })
    .catch(err => {
      //   console.log(err);
      dispatch({
        type: FETCH_FAILURE,
        payload: `ERROR STATUS : ${err.response.status}`
      });
    });
};
