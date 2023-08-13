import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Carousel, Card } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import Slide1 from "../gifs/Group 138.png";
import Slide2 from "../gifs/Group 139.png";
import Slide3 from "../gifs/Group 140.png";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [activeHeading, setActiveHeading] = useState("Heading 1");

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="green-background">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between">
            <h2
              className={
                activeHeading === "Heading 1"
                  ? "active-heading"
                  : "inactive-heading"
              }
              onClick={() => handleHeadingClick("Heading 1")}
            >
              BFC TODAY
            </h2>
            <h2
              className={
                activeHeading === "Heading 2"
                  ? "active-heading"
                  : "inactive-heading"
              }
              onClick={() => handleHeadingClick("Heading 2")}
            >
              HISTORY OF THE BFC
            </h2>
            <h2
              className={
                activeHeading === "Heading 3"
                  ? "active-heading"
                  : "inactive-heading"
              }
              onClick={() => handleHeadingClick("Heading 3")}
            >
              CONSERVATION
            </h2>
          </div>
        </Card.Header>
        <Card.Body>
          {activeHeading === "Heading 1" && (
            <p>
              The British Falconers’ Club is the largest in the UK with more
              than 1,000 members organised in 13 Regions. The BFC is not a Bird
              of Prey Centre, but we are often represented at major Raptor
              related shows and events around the country where we are always
              delighted to speak to existing or prospective members. British
              Falconers’ Club plays an active role in promoting the ancient art
              of Falconry and the preservation of Birds of Prey. We have an
              International reputation and club members represent the UK at
              major International events such as the International Falconry
              Festival In Abu Dhabi in December 2014 and the IAF Council of
              Delegates November 2016 If you have a passion for Birds of Prey,
              or are thinking about owning your own hunting Hawk, why not take
              the opportunity to talk to your nearest region? We have an
              important role in helping new and aspiring Falconers to get the
              best possible start in this field sport and will be happy to
              provide mentoring and advice to help you find the right hawk and
              make a sure start..
            </p>
          )}
          {activeHeading === "Heading 2" && (
            <p>
              The British Falconers’ Club was founded in 1927, by the surviving
              members of the Old Hawking Club. The Club currently has around
              1000 members and is the oldest and largest falconry club in the
              UK. The Club was a founder member of The British Field Sports
              Society (BFSS), now encompassed in the Countryside Alliance, and
              also active supports The International Association for Falconry
              and the Conservation of Birds of Prey (IAF), The Hawk Board, The
              Federation of Country Sportsmen of the EU (FACE), and the Standing
              Conference on Countryside Sports (SCCS) It works closely with
              these organisations to ensure that laws and regulations in the EU
              or Britain do not adversely affect falconry and the conservation
              of Birds of Prey, their habitats and their natural prey species.
            </p>
          )}
          {activeHeading === "Heading 3" && (
            <p>
              The British Falconers’ Club is dedicated to the conservation of
              Birds of Prey, the environments in which they thrive and the
              various species upon which they feed. As apex predators, Birds of
              Prey are significant indicators of healthy and well-balanced
              environments. In the 1950s it was Falconers who first alerted the
              Government in the United Kingdom to the devastating loss of Birds
              of Prey caused by the use of unsafe pesticides such as DDT.
              Falconers in the United Kingdom have been at the forefront of the
              re-introduction of the Red Kite, the White-tailed Sea Eagle and
              the Goshawk. In 2014 the BFC were a sponsor of the Woodcock
              satellite tracking programme. Our work continues through our
              active participation in European and worldwide bodies ensuring the
              long-term survival of all Birds of Prey and the healthy habitats
              they need for survival..
            </p>
          )}
        </Card.Body>
      </Card>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
