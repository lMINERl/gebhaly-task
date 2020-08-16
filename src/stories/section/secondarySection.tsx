import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from '../menu/menu';
import Achievement from '../achievement/achievement';
import Carosel from '../carosel/carosel';
import Col from 'react-bootstrap/esm/Col';

const SecondarySection = (props: {}) => {
  return (
    <Container fluid className="section section__secondary__container">
      <Row className="section section__secondary">
        <Achievement description="1st achivement" />
        <Achievement description="2nd achivement" />
        <Achievement description="3rd achivement" />
        <Achievement description="4th achivement" />
      </Row>
      <Row className="section section__secondary--dark">
        <Col className="d-flex justify-content-center">
          <Carosel
            content={{
              products: [
                { name: 'product 1', price: 2.5 },
                { name: 'product 2', price: 3.5 },
                { name: 'product 3', price: 4.5 },
                { name: 'product 4', price: 5.5 }
              ]
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondarySection;
