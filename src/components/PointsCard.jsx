import * as React from 'react';
import Card from 'react-bootstrap/Card';

export default function PointsCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Punktestand</Card.Title>
                <Card.Text>
                    <h2>2004 Punkte</h2>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}