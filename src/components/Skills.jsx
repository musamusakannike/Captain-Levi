import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsData = [
    { skill: "Community Engagement", percentage: 90, color: "#4caf50" },
    { skill: "Social Media Management", percentage: 85, color: "#2196f3" },
    { skill: "Event Coordination", percentage: 95, color: "#ff9800" },
    { skill: "Analytics & Reporting", percentage: 80, color: "#9c27b0" },
];

const Skills = () => (
    <section className="section">
        <Container className="text-center">
            <h5>Skills</h5>
            <h2 className="section-title mb-4">Why Choose Me</h2>
            <p className="mb-5 pb-4">Proven track record in building successful communities.</p>
            <Row>
                {skillsData.map((skill, index) => (
                    <Col sm={6} key={index} className="mb-4">
                        <div className="skill-wrapper" style={{ width: 150, margin: "0 auto" }}>
                            <CircularProgressbar
                                value={skill.percentage}
                                text={`${skill.percentage}%`}
                                styles={buildStyles({
                                    pathColor: skill.color,
                                    textColor: "#333",
                                    trailColor: "#f0f0f0",
                                    backgroundColor: "#f8f8f8",
                                })}
                            />
                        </div>
                        <h6 className="mt-3">{skill.skill}</h6>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Skills;
