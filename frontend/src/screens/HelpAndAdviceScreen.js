import React from "react";
import Logo from "../gifs/FalconerTraining.jpg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HelpAndAdvice = () => {
  return (
    <Container className="help-and-advice">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Help and Advice</h1>
          <p className="lead">
            We want to make sure that you have access to all the information and
            resources you need to succeed. Here are some resources that can help
            you:
          </p>
          <Card className="mb-4">
            <Card.Body>
              <h2>New To Falconry</h2>
              <p>
                <a href="https://www.example.com/">New To Falconry</a> - If you
                are interested in taking up Falconry or working with Birds of
                Prey in another capacity then there are many things you need to
                know. The British Falconers’ Club is dedicated to the welfare of
                birds of prey and provides help, advice and mentoring to all
                aspiring falconers regardless of your age or current level of
                experience. By contacting your nearest BFC Region you will find
                a ready source of help and advice about building accommodation,
                buying essential equipment and where to find your first Hawk.
                You will also be able to join the club on Field meets where you
                will see our Birds of Prey in action.
              </p>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <h2>Falconry Courses</h2>
              <p>
                <a href="http://raptorawards.co.uk/map/">FalconerTraining</a> -
                The BFC recommends that all new falconers study a formal course
                such as those provided by Raptor Awards or Lantra. The BFC does
                not provide falconry courses, but most regions have mentors in
                place to help you find the right path for you.
              </p>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <h2>Health And Safety</h2>
              <p>
                <a href="https://www.example.com/">Example Resource 3</a> - This
                resource provides tools and resources to help you manage stress
                and improve your overall well-being.
              </p>
            </Card.Body>
          </Card>
          <p className="lead">
            If you need further assistance or have any questions, please feel
            free to contact us at{" "}
            <a href="mailto:help@example.com">help@example.com</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpAndAdvice;
