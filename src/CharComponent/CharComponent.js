import React from 'react';


function validationComponent(props) {
  
  return (
    <div onClick = { props.click }>
      { '"' + props.char + '"' }
    </div>
  );
}


export default validationComponent;
