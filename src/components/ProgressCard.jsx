import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProgressCard() {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Aktueller Fortschritt</Card.Title>
                <ProgressBar now={60} label={"60%"}/>
                <Card.Text>
                    Das ist dein aktueller Fortschritt für den Kurs Musik-Theorie. Weiter so!
                </Card.Text>
                <Button className="button">Jetzt weiter lernen</Button>
            </Card.Body>
        </Card>
    );
}