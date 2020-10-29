/**
 * Default state for the Redux store.
 *
 * @type {{}}
 */
const defaultState = {
  dashBoard: {
    buttonsList: [{
      id: 0,
      checked: false,
      disabled: false
    }],
    totalSelected: [],
    comments: []
  }
};

export default defaultState;
