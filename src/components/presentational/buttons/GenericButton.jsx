import React from 'react';

const GenericButton = ({buttonClass, buttonText, clickHandler, isDisabled, selected}) => {
  return (
    <button
      className={`${buttonClass} ${selected ? 'selected' : ''}`}
      type="button"
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  )
};

GenericButton.defaultProps = {
  buttonClass: "generic-button",
  buttonText: "submit",
  clickHandler: null
};

export default GenericButton;
