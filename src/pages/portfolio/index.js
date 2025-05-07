import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { 
  FaShoppingCart, 
  FaRobot, 
  FaBrain, 
  FaUserTie, 
  FaChartBar, 
  FaCommentDots,
  FaBook,
  FaCoins,
  FaCode,
  FaPhone,
  FaHamburger,
  FaBookOpen,
  FaGamepad,
  FaMobileAlt,
  FaStore,
  FaEnvelope,
  FaMicrophone,
  FaGlobe 
} from "react-icons/fa";

export const Portfolio = () => {
  // Function to render the correct icon
  const renderIcon = (iconName) => {
    switch(iconName) {
      case "shopping-cart": 
        return <FaShoppingCart style={{ fontSize: '60px', color: 'white' }} />;
      case "robot": 
        return <FaRobot style={{ fontSize: '60px', color: 'white' }} />;
      case "brain": 
        return <FaBrain style={{ fontSize: '60px', color: 'white' }} />;
      case "user-tie": 
        return <FaUserTie style={{ fontSize: '60px', color: 'white' }} />;
      case "chart-bar": 
        return <FaChartBar style={{ fontSize: '60px', color: 'white' }} />;
      case "comment-dots": 
        return <FaCommentDots style={{ fontSize: '60px', color: 'white' }} />;
      case "book": 
        return <FaBook style={{ fontSize: '60px', color: 'white' }} />;
      case "coins": 
        return <FaCoins style={{ fontSize: '60px', color: 'white' }} />;
      case "code": 
        return <FaCode style={{ fontSize: '60px', color: 'white' }} />;
      case "phone": 
        return <FaPhone style={{ fontSize: '60px', color: 'white' }} />;
      case "hamburger": 
        return <FaHamburger style={{ fontSize: '60px', color: 'white' }} />;
      case "book-open": 
        return <FaBookOpen style={{ fontSize: '60px', color: 'white' }} />;
      case "gamepad": 
        return <FaGamepad style={{ fontSize: '60px', color: 'white' }} />;
      case "mobile-alt": 
        return <FaMobileAlt style={{ fontSize: '60px', color: 'white' }} />;
      case "store": 
        return <FaStore style={{ fontSize: '60px', color: 'white' }} />;
      case "envelope": 
        return <FaEnvelope style={{ fontSize: '60px', color: 'white' }} />;
      case "microphone": 
        return <FaMicrophone style={{ fontSize: '60px', color: 'white' }} />;
      case "browser": 
        return <FaGlobe style={{ fontSize: '60px', color: 'white' }} />;
      default: 
        return <FaUserTie style={{ fontSize: '60px', color: 'white' }} />;
    }
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <a href={data.link} className="project-link">
                <div className="project-icon">
                  {renderIcon(data.icon)}
                  <h3 style={{ color: 'white', marginTop: '20px' }}>{data.name}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
