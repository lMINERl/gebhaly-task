import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from '../menu/menu';

const MainSection = (props: {
  contents: {
    head: string;
    title: string;
    description: string;
    actions?: { name: string; action: any }[];
  };
}) => {
  return (
    <Container fluid className="section section__main__container">
      <Row className="section section__main">
        <div className="section section__main__head col-sm-12">
          <h2>{props.contents.head}</h2>
        </div>
        <div className="section section__main__title col-sm-12 ">
          <h1>{props.contents.title}</h1>
        </div>
        <div className="section section__main__description col-sm-12 ">
          <h6>{props.contents.description}</h6>
        </div>
        <div className="section section__main__actions col-sm-12">
          {props.contents.actions ? (
            <Menu shape="default" content={{ menu: props.contents.actions }} />
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default MainSection;
