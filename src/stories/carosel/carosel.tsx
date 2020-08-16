import React from 'react';
import DefCarosel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import SVG from '../../assets/crown-solid.svg';
const Carosel = (props: {
  content: { products: { name: string; price: number }[] };
}) => {
  return (
    <DefCarosel>
      {props.content.products.map((product, index) => (
        <DefCarosel.Item key={`${product.name}-${index}`}>
          <div
            style={{
              width: '20rem',
              height: '20rem',
              backgroundColor: 'black'
            }}
          ></div>
          <DefCarosel.Caption>
            <h3>{product.name}</h3>
            <Button className="btn btn-secondary">
              <div style={{ width: '50%', margin: '0 auto' }}>
                <img src={SVG} alt="SVG" />
              </div>
              <div>{product.price} $</div>
            </Button>
          </DefCarosel.Caption>
        </DefCarosel.Item>
      ))}
    </DefCarosel>
  );
};

export default Carosel;
