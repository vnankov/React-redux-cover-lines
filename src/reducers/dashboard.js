import ACTION_TYPES from '../constants/actionTypes';

const dashBoard = (state = [], action) => {
  const {payload} = action;

  switch (action.type) {
    case ACTION_TYPES.ADD_BUTTONS_LIST:
      return {
        ...state,
        "buttonsList": payload.buttonsList
      };
    case ACTION_TYPES.CLICK_ON_BUTTON:
      return {
        ...state,
        "buttonsList": state.buttonsList.map(item => {
          return item.id === payload.id ? {...item, selected: !item.selected} : item;
        })
      };
    case ACTION_TYPES.TOGGLE_DISABLE:
      return {
        ...state,
        "buttonsList": state.buttonsList.map(item => {
          if(payload.isDisabled) {
            return item.selected ? item : {...item, disabled: true};
          } else {
            return {...item, disabled: false}
          }
        })
      };
    case ACTION_TYPES.SELECT_ITEM:
      let isSelected = false;
      state.totalSelected.map(item => {
        if (item.id === payload.id) isSelected = true;
        return  isSelected
      });

      if(isSelected) {
        return {
          ...state,
          "totalSelected": state.totalSelected.filter(item => item.id !== payload.id)
        };
      } else {
        return {
          ...state,
          "totalSelected": [...state.totalSelected, {id: payload.id}]
        };
      }
    case ACTION_TYPES.ADD_COMMENTS:
      return {
        ...state,
        "comments": payload.data
      };
    default:
      return state;
  }
};

export default dashBoard;
