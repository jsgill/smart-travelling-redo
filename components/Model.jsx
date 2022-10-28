import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { destination_object } from "../utility/cardIcon";
import styles from "../styles/TripHeader.module.css"

const MydModalWithGrid = (props) => {
    const [DestinationSelected, setDestinationSelected] = useState(destination_object);
    function setDestinationBorder(key) {
        const NewState = Object.assign({}, DestinationSelected)
        if (!DestinationSelected[key].selected) {
            NewState[key].selected = true;
            props.change(NewState[key].title)
            setDestinationSelected(NewState);
        }
        else {
            NewState[key].selected = false;
            props.change(NewState[key].title)
            setDestinationSelected(NewState);
        }
    }
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose 1 or more
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        {Object.keys(DestinationSelected).map(key => {
                            return (
                                <Col key={key} xs={6} md={3}>
                                    <Card onClick={() => setDestinationBorder(key)} className={DestinationSelected[key].selected ? "withBorder" : "noBorder"}>
                                        <Card.Title className={`text-center ${styles.card_title}`}>{DestinationSelected[key].title}</Card.Title>
                                        <Card.Img src={DestinationSelected[key].path} alt="Card image" />
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Card.Title className="text-center">Coming Soon</Card.Title>
                        <Col>
                            <Card className="noBorder">
                                <Card.Title className={`text-center ${styles.card_title}`}>Goa</Card.Title>
                                <Card.Img className="card-image" src="https://ik.imagekit.io/ahsrg6khu/New_Folder/trip/destination_4_X1RnPxgh7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082891336" />
                            </Card>
                        </Col>
                        <Col>
                            <Card className="noBorder">
                                <Card.Title className={`text-center ${styles.card_title}`}>Rajasthan</Card.Title>
                                <Card.Img className="card-image" src="https://ik.imagekit.io/ahsrg6khu/New_Folder/trip/destination_5_iOtQfi2KX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666082889328" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onNop} disabled={!props.selectCity} className={"tripOne_inputone_btn"} variant="success" size="md" >Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MydModalWithGrid;