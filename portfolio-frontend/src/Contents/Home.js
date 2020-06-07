import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pageContent from './pageContent';


const HomePage = ({ match }) => {
    //const name = match.params.name;
    const name = 'intro';
    const con = pageContent.find(content => content.name === name);

    return (
        <>
        <Row>
            <Col>
                <h1> { con.title } </h1>
                <p>
                    {con.content}
                </p>
            </Col>
            <Col>

            </Col>
        </Row>
        </>
    );  
}

export default HomePage;