import * as React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import CustomCarousel from '../components/CustomCarousel';
import ProgressCard from '../components/ProgressCard';
import PointsCard from '../components/PointsCard';
import ViewCoursesCard from '../components/ViewCoursesCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard() {
    return (
        <div>
            <CustomNavbar />
            <Container className="container-dashboard">
                <Row>
                    <Col sm={8}>
                        <h1>Willkommen zurück, Melissa!</h1>
                        <div className='center'>
                            <img src="assets/img/profile-pic.jpg" alt="profile-pic" className="profile-pic"/>
                        </div>
                    </Col>
                    <Col sm={4}>
                    <CustomCarousel />
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <ProgressCard />
                    </Col>
                    <Col sm>
                        <PointsCard />
                    </Col>
                    <Col sm>
                        <ViewCoursesCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}