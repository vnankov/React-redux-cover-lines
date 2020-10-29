import 'whatwg-fetch';
import * as actions from '../actions'
import {API_URL} from "../constants/apiRoutes";

export const getComments = (id) => {
  return (dispatch) => {

    return fetch(`${API_URL}/comments?postId=${id}`)
      .then((response) => {
        let comments = null;

        if (response.status >= 200 && response.status < 300) {
          try {
            comments = response.json();
          } catch (e) {
            window.console.log('The response is not correct');
          }
        }

        return comments;
      })
      .then((comments) => {
        if (comments !== null) {

          //Store the received comments in the redux store
          dispatch(actions.addComments(comments));
        }
      })
  };
};
