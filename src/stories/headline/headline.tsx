import '../_config';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'react-bootstrap/NavLink';

const Headline = (props: {
  content: { telephoneNumber: string; email: string };
}) => {
  return (
    <Container fluid className="headline headline__container">
      <Row>
        <Col className="headline headline__contacts ">
          <hr />
          <div className="headline headline__item">
            {props.content.telephoneNumber}
          </div>
          <div className="headline headline__item">{props.content.email} </div>
          <hr />
        </Col>
        <Col className="headline headline__login">
          <hr />
          <Link className="headline headline__item">Login</Link>
          <Link className="headline headline__item">Cart</Link>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Headline;
