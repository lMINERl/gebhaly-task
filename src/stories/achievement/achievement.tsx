import React from 'react';
import SVG from '../../assets/crown-solid.svg';
const Achievement = (props: { description: string }) => {
  return (
    <div>
      <div className="achievement achievement__overlay overlay1">
        <div className="achievement achievement__container">
          <img src={SVG} alt="svg" />
        </div>
      </div>
      <div className="achievement__description">{props.description}</div>
    </div>
  );
};

export default Achievement;
