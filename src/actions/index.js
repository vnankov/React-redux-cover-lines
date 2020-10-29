import ACTION_TYPES from '../constants/actionTypes';

export const addButtons = (buttonsList) => {
  return {
    type: ACTION_TYPES.ADD_BUTTONS_LIST,
    payload: {
      buttonsList
    }
  }
};

export const clickOnButton = (id) => {
  return {
    type: ACTION_TYPES.CLICK_ON_BUTTON,
    payload: {
      id
    }
  }
};

export const toggleDisable = (isDisabled) => {
  return {
    type: ACTION_TYPES.TOGGLE_DISABLE,
    payload: {
      isDisabled
    }
  }
};

export const selectItem = (id) => {
  return {
    type: ACTION_TYPES.SELECT_ITEM,
    payload: {
      id
    }
  }
};

export const addComments = (data) => {
  return {
    type: ACTION_TYPES.ADD_COMMENTS,
    payload: {
      data
    }
  }
};
