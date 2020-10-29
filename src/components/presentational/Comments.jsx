import React from 'react'

const Comments = (props) => {
  return (
    <p className={`${props.id <= props.activeButtonsCount ? 'active' : "" }`}>
      {props.name}
    </p>
  )
};

export default Comments
