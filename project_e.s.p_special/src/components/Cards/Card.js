import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardImg, 
  CardText,
  CardSubtitle,
  CardDeck
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DictionaryHeader from "components/Headers/DictionaryHeader.js"
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "../index-sections/SectionCarousel";

function AnimalDictionary(data) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("animals-dictionary");
    return function cleanup() {
      document.body.classList.remove("animals-dictionary");
    };
  });
  return (
    <>
        <Card>
            
            <CardBody>
                <CardTitle tag="h5">ScientificName: {data.scientificName}</CardTitle>
                <CardTitle tag="h5">VNName: {data.VNName}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
        
    </>
  );
}

export default AnimalDictionary;
