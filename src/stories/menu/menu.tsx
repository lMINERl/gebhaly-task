import React from 'react';
import Button from 'react-bootstrap/Button';

const Menu = (props: {
  shape?: 'default';
  content: {
    menu: {
      name: string;
      action: any;
    }[];
  };
}) => {
  const menu = props.content.menu.map((item, index) => {
    return (
      <Button
        key={`${item.name}-${index}`}
        className={`${props.shape ? 'ml-2' : 'menu menu__button'}`}
        onClick={(e) => {
          item.action(e);
        }}
      >
        {item.name}
      </Button>
    );
  });
  return <div>{menu}</div>;
};

export default Menu;
