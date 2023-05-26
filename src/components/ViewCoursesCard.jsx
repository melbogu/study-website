import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ViewCoursesCard() {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Über 35 Kurse warten auf dich!</Card.Title>
                <Card.Text>
                    Von Sprachen über Musik bis Programmierung.
                </Card.Text>
                <Button className="button">Kurse entdecken</Button>
            </Card.Body>
        </Card>
    );
}