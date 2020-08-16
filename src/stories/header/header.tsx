import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menu from '../menu/menu';
import SVG from '../../assets/crown-solid.svg';

const Header = (props: {}) => {
  return (
    <Container fluid className="">
      <Row className="header header__container">
        <div className="header header__logo__container col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="header header__logo">
            <img src={SVG} alt="SVG" />
          </div>
        </div>
        <div className="header header__menu col-md-7 col-lg-7 col-xl-7 col-sm-12">
          <Menu
            content={{
              menu: [
                {
                  name: 'Home',
                  action: (e: any) => {
                    console.log(e.target.value);
                  }
                },
                {
                  name: 'Find ???',
                  action: (e: any) => {
                    console.log(e.target.value);
                  }
                },
                {
                  name: 'Lack',
                  action: (e: any) => {
                    console.log(e.target.value);
                  }
                },
                {
                  name: 'Subscription',
                  action: (e: any) => {
                    console.log(e.target.value);
                  }
                },
                {
                  name: 'Big Deals',
                  action: (e: any) => {
                    console.log(e.target.value);
                  }
                }
              ]
            }}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Header;
